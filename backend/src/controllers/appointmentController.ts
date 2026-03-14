import { Request, Response } from 'express';
import Appointment from '../models/Appointment';
import { AuthRequest } from '../middlewares/auth';

// Create appointment
export const createAppointment = async (req: Request, res: Response): Promise<void> => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();

    res.status(201).json({
      success: true,
      data: appointment,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Get all appointments with pagination and search
export const getAllAppointments = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = req.query.search as string || '';
    const status = req.query.status as string;
    const doctorId = req.query.doctorId as string;

    // Build query
    const query: any = {};

    if (search) {
      query.$or = [
        { patientName: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
      ];
    }

    if (status) {
      query.status = status;
    }

    if (doctorId) {
      query.doctorId = doctorId;
    }

    const skip = (page - 1) * limit;

    const appointments = await Appointment.find(query)
      .populate('doctorId', 'name specialization')
      .sort({ date: -1, time: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Appointment.countDocuments(query);

    res.status(200).json({
      success: true,
      data: appointments,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Get appointment by ID
export const getAppointmentById = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const appointment = await Appointment.findById(req.params.id).populate('doctorId', 'name specialization');

    if (!appointment) {
      res.status(404).json({
        success: false,
        error: 'Appointment not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: appointment,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Update appointment
export const updateAppointment = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('doctorId', 'name specialization');

    if (!appointment) {
      res.status(404).json({
        success: false,
        error: 'Appointment not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: appointment,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Delete appointment
export const deleteAppointment = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);

    if (!appointment) {
      res.status(404).json({
        success: false,
        error: 'Appointment not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Appointment deleted successfully',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Cancel appointment
export const cancelAppointment = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: 'cancelled' },
      { new: true, runValidators: true }
    ).populate('doctorId', 'name specialization');

    if (!appointment) {
      res.status(404).json({
        success: false,
        error: 'Appointment not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: appointment,
      message: 'Appointment cancelled successfully',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

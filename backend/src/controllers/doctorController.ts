import { Request, Response } from 'express';
import Doctor from '../models/Doctor';
import { AuthRequest } from '../middlewares/auth';

// Create doctor
export const createDoctor = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();

    res.status(201).json({
      success: true,
      data: doctor,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Get all doctors with pagination and search
export const getAllDoctors = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = req.query.search as string || '';
    const specialization = req.query.specialization as string;
    const department = req.query.department as string;

    // Build query
    const query: any = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { specialization: { $regex: search, $options: 'i' } },
      ];
    }

    if (specialization) {
      query.specialization = { $regex: specialization, $options: 'i' };
    }

    if (department) {
      query.department = department;
    }

    const skip = (page - 1) * limit;

    const doctors = await Doctor.find(query)
      .populate('department', 'name')
      .sort({ name: 1 })
      .skip(skip)
      .limit(limit);

    const total = await Doctor.countDocuments(query);

    res.status(200).json({
      success: true,
      data: doctors,
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

// Get doctor by ID
export const getDoctorById = async (req: Request, res: Response): Promise<void> => {
  try {
    const doctor = await Doctor.findById(req.params.id).populate('department', 'name');

    if (!doctor) {
      res.status(404).json({
        success: false,
        error: 'Doctor not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: doctor,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Update doctor
export const updateDoctor = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('department', 'name');

    if (!doctor) {
      res.status(404).json({
        success: false,
        error: 'Doctor not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: doctor,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Delete doctor
export const deleteDoctor = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);

    if (!doctor) {
      res.status(404).json({
        success: false,
        error: 'Doctor not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Doctor deleted successfully',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Get doctor list (simple list for dropdowns)
export const getDoctorList = async (req: Request, res: Response): Promise<void> => {
  try {
    const doctors = await Doctor.find()
      .select('name specialization')
      .sort({ name: 1 });

    res.status(200).json({
      success: true,
      data: doctors,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

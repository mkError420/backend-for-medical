import { Request, Response } from 'express';
import Admission from '../models/Admission';
import { AuthRequest } from '../middlewares/auth';

// Create admission application
export const createAdmission = async (req: Request, res: Response): Promise<void> => {
  try {
    const admission = new Admission(req.body);
    await admission.save();

    res.status(201).json({
      success: true,
      data: admission,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Get all admission applications with pagination and search
export const getAllAdmissions = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = req.query.search as string || '';
    const status = req.query.status as string;

    // Build query
    const query: any = {};

    if (search) {
      query.$or = [
        { studentName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
      ];
    }

    if (status) {
      query.status = status;
    }

    const skip = (page - 1) * limit;

    const admissions = await Admission.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Admission.countDocuments(query);

    res.status(200).json({
      success: true,
      data: admissions,
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

// Get admission by ID
export const getAdmissionById = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const admission = await Admission.findById(req.params.id);

    if (!admission) {
      res.status(404).json({
        success: false,
        error: 'Admission application not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: admission,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Update admission application
export const updateAdmission = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const admission = await Admission.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!admission) {
      res.status(404).json({
        success: false,
        error: 'Admission application not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: admission,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Delete admission application
export const deleteAdmission = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const admission = await Admission.findByIdAndDelete(req.params.id);

    if (!admission) {
      res.status(404).json({
        success: false,
        error: 'Admission application not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Admission application deleted successfully',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

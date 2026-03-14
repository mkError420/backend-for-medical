import { Request, Response } from 'express';
import Faculty from '../models/Faculty';
import { AuthRequest } from '../middlewares/auth';

// Create faculty
export const createFaculty = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const faculty = new Faculty(req.body);
    await faculty.save();

    res.status(201).json({
      success: true,
      data: faculty,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Get all faculty with pagination and search
export const getAllFaculty = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = req.query.search as string || '';
    const department = req.query.department as string;

    // Build query
    const query: any = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { designation: { $regex: search, $options: 'i' } },
      ];
    }

    if (department) {
      query.department = department;
    }

    const skip = (page - 1) * limit;

    const faculty = await Faculty.find(query)
      .populate('department', 'name')
      .sort({ name: 1 })
      .skip(skip)
      .limit(limit);

    const total = await Faculty.countDocuments(query);

    res.status(200).json({
      success: true,
      data: faculty,
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

// Get faculty by ID
export const getFacultyById = async (req: Request, res: Response): Promise<void> => {
  try {
    const faculty = await Faculty.findById(req.params.id).populate('department', 'name');

    if (!faculty) {
      res.status(404).json({
        success: false,
        error: 'Faculty not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: faculty,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Update faculty
export const updateFaculty = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const faculty = await Faculty.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('department', 'name');

    if (!faculty) {
      res.status(404).json({
        success: false,
        error: 'Faculty not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: faculty,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Delete faculty
export const deleteFaculty = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const faculty = await Faculty.findByIdAndDelete(req.params.id);

    if (!faculty) {
      res.status(404).json({
        success: false,
        error: 'Faculty not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Faculty deleted successfully',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

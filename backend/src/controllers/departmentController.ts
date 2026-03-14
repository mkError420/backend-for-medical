import { Request, Response } from 'express';
import Department from '../models/Department';
import { AuthRequest } from '../middlewares/auth';

// Create department
export const createDepartment = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const department = new Department(req.body);
    await department.save();

    res.status(201).json({
      success: true,
      data: department,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Get all departments with pagination and search
export const getAllDepartments = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = req.query.search as string || '';

    // Build query
    const query: any = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { headOfDepartment: { $regex: search, $options: 'i' } },
      ];
    }

    const skip = (page - 1) * limit;

    const departments = await Department.find(query)
      .sort({ name: 1 })
      .skip(skip)
      .limit(limit);

    const total = await Department.countDocuments(query);

    res.status(200).json({
      success: true,
      data: departments,
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

// Get department by ID
export const getDepartmentById = async (req: Request, res: Response): Promise<void> => {
  try {
    const department = await Department.findById(req.params.id);

    if (!department) {
      res.status(404).json({
        success: false,
        error: 'Department not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: department,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Update department
export const updateDepartment = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const department = await Department.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!department) {
      res.status(404).json({
        success: false,
        error: 'Department not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: department,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Delete department
export const deleteDepartment = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const department = await Department.findByIdAndDelete(req.params.id);

    if (!department) {
      res.status(404).json({
        success: false,
        error: 'Department not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Department deleted successfully',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Get department list (simple list for dropdowns)
export const getDepartmentList = async (req: Request, res: Response): Promise<void> => {
  try {
    const departments = await Department.find()
      .select('name')
      .sort({ name: 1 });

    res.status(200).json({
      success: true,
      data: departments,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

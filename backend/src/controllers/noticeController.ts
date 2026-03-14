import { Request, Response } from 'express';
import Notice from '../models/Notice';
import { AuthRequest } from '../middlewares/auth';

// Create notice
export const createNotice = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const noticeData = {
      ...req.body,
      date: req.body.date || new Date(),
    };

    const notice = new Notice(noticeData);
    await notice.save();

    res.status(201).json({
      success: true,
      data: notice,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Get all notices with pagination and search
export const getAllNotices = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = req.query.search as string || '';
    const category = req.query.category as string;

    // Build query
    const query: any = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    if (category) {
      query.category = category;
    }

    const skip = (page - 1) * limit;

    const notices = await Notice.find(query)
      .sort({ date: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Notice.countDocuments(query);

    res.status(200).json({
      success: true,
      data: notices,
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

// Get notice by ID
export const getNoticeById = async (req: Request, res: Response): Promise<void> => {
  try {
    const notice = await Notice.findById(req.params.id);

    if (!notice) {
      res.status(404).json({
        success: false,
        error: 'Notice not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: notice,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Update notice
export const updateNotice = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const notice = await Notice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!notice) {
      res.status(404).json({
        success: false,
        error: 'Notice not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: notice,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Delete notice
export const deleteNotice = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const notice = await Notice.findByIdAndDelete(req.params.id);

    if (!notice) {
      res.status(404).json({
        success: false,
        error: 'Notice not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Notice deleted successfully',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Get notices by category
export const getNoticesByCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { category } = req.params;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const skip = (page - 1) * limit;

    const notices = await Notice.find({ category })
      .sort({ date: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Notice.countDocuments({ category });

    res.status(200).json({
      success: true,
      data: notices,
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

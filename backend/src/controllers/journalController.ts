import { Request, Response } from 'express';
import Journal from '../models/Journal';
import { AuthRequest } from '../middlewares/auth';

// Create journal article
export const createJournal = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const journalData = {
      ...req.body,
      publishedDate: req.body.publishedDate || new Date(),
    };

    const journal = new Journal(journalData);
    await journal.save();

    res.status(201).json({
      success: true,
      data: journal,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Get all journal articles with pagination and search
export const getAllJournals = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = req.query.search as string || '';
    const author = req.query.author as string;

    // Build query
    const query: any = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { abstract: { $regex: search, $options: 'i' } },
        { author: { $regex: search, $options: 'i' } },
      ];
    }

    if (author) {
      query.author = { $regex: author, $options: 'i' };
    }

    const skip = (page - 1) * limit;

    const journals = await Journal.find(query)
      .sort({ publishedDate: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Journal.countDocuments(query);

    res.status(200).json({
      success: true,
      data: journals,
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

// Get journal by ID
export const getJournalById = async (req: Request, res: Response): Promise<void> => {
  try {
    const journal = await Journal.findById(req.params.id);

    if (!journal) {
      res.status(404).json({
        success: false,
        error: 'Journal article not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: journal,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Update journal
export const updateJournal = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const journal = await Journal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!journal) {
      res.status(404).json({
        success: false,
        error: 'Journal article not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: journal,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Delete journal
export const deleteJournal = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const journal = await Journal.findByIdAndDelete(req.params.id);

    if (!journal) {
      res.status(404).json({
        success: false,
        error: 'Journal article not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Journal article deleted successfully',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

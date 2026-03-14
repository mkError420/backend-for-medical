"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJournal = exports.updateJournal = exports.getJournalById = exports.getAllJournals = exports.createJournal = void 0;
const Journal_1 = __importDefault(require("../models/Journal"));
const createJournal = async (req, res) => {
    try {
        const journalData = {
            ...req.body,
            publishedDate: req.body.publishedDate || new Date(),
        };
        const journal = new Journal_1.default(journalData);
        await journal.save();
        res.status(201).json({
            success: true,
            data: journal,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.createJournal = createJournal;
const getAllJournals = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search || '';
        const author = req.query.author;
        const query = {};
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
        const journals = await Journal_1.default.find(query)
            .sort({ publishedDate: -1, createdAt: -1 })
            .skip(skip)
            .limit(limit);
        const total = await Journal_1.default.countDocuments(query);
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.getAllJournals = getAllJournals;
const getJournalById = async (req, res) => {
    try {
        const journal = await Journal_1.default.findById(req.params.id);
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.getJournalById = getJournalById;
const updateJournal = async (req, res) => {
    try {
        const journal = await Journal_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.updateJournal = updateJournal;
const deleteJournal = async (req, res) => {
    try {
        const journal = await Journal_1.default.findByIdAndDelete(req.params.id);
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.deleteJournal = deleteJournal;
//# sourceMappingURL=journalController.js.map
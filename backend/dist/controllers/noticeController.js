"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNoticesByCategory = exports.deleteNotice = exports.updateNotice = exports.getNoticeById = exports.getAllNotices = exports.createNotice = void 0;
const Notice_1 = __importDefault(require("../models/Notice"));
const createNotice = async (req, res) => {
    try {
        const noticeData = {
            ...req.body,
            date: req.body.date || new Date(),
        };
        const notice = new Notice_1.default(noticeData);
        await notice.save();
        res.status(201).json({
            success: true,
            data: notice,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.createNotice = createNotice;
const getAllNotices = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search || '';
        const category = req.query.category;
        const query = {};
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
        const notices = await Notice_1.default.find(query)
            .sort({ date: -1, createdAt: -1 })
            .skip(skip)
            .limit(limit);
        const total = await Notice_1.default.countDocuments(query);
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.getAllNotices = getAllNotices;
const getNoticeById = async (req, res) => {
    try {
        const notice = await Notice_1.default.findById(req.params.id);
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.getNoticeById = getNoticeById;
const updateNotice = async (req, res) => {
    try {
        const notice = await Notice_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.updateNotice = updateNotice;
const deleteNotice = async (req, res) => {
    try {
        const notice = await Notice_1.default.findByIdAndDelete(req.params.id);
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.deleteNotice = deleteNotice;
const getNoticesByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const notices = await Notice_1.default.find({ category })
            .sort({ date: -1, createdAt: -1 })
            .skip(skip)
            .limit(limit);
        const total = await Notice_1.default.countDocuments({ category });
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.getNoticesByCategory = getNoticesByCategory;
//# sourceMappingURL=noticeController.js.map
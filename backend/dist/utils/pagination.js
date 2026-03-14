"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSearchQuery = exports.createPaginationResult = exports.getPaginationParams = void 0;
const getPaginationParams = (query) => {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const skip = (page - 1) * limit;
    return { page, limit, skip };
};
exports.getPaginationParams = getPaginationParams;
const createPaginationResult = (page, limit, total) => {
    return {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
    };
};
exports.createPaginationResult = createPaginationResult;
const createSearchQuery = (search, fields) => {
    if (!search || fields.length === 0)
        return {};
    const searchFields = fields.map(field => ({
        [field]: { $regex: search, $options: 'i' }
    }));
    return { $or: searchFields };
};
exports.createSearchQuery = createSearchQuery;
//# sourceMappingURL=pagination.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
const validateSchema = (schema) => {
    return (req, res, next) => {
        const errors = [];
        if (schema.body) {
            const { error } = schema.body.validate(req.body);
            if (error) {
                errors.push(`Body: ${error.details.map(detail => detail.message).join(', ')}`);
            }
        }
        if (schema.query) {
            const { error } = schema.query.validate(req.query);
            if (error) {
                errors.push(`Query: ${error.details.map(detail => detail.message).join(', ')}`);
            }
        }
        if (schema.params) {
            const { error } = schema.params.validate(req.params);
            if (error) {
                errors.push(`Params: ${error.details.map(detail => detail.message).join(', ')}`);
            }
        }
        if (errors.length > 0) {
            res.status(400).json({
                success: false,
                error: 'Validation failed',
                details: errors,
            });
            return;
        }
        next();
    };
};
exports.validateSchema = validateSchema;
//# sourceMappingURL=validateSchema.js.map
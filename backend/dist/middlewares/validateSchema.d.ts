import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
export interface ValidationSchema {
    body?: Joi.ObjectSchema;
    query?: Joi.ObjectSchema;
    params?: Joi.ObjectSchema;
}
export declare const validateSchema: (schema: ValidationSchema) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=validateSchema.d.ts.map
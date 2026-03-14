import { Request, Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
export declare const createDepartment: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getAllDepartments: (req: Request, res: Response) => Promise<void>;
export declare const getDepartmentById: (req: Request, res: Response) => Promise<void>;
export declare const updateDepartment: (req: AuthRequest, res: Response) => Promise<void>;
export declare const deleteDepartment: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getDepartmentList: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=departmentController.d.ts.map
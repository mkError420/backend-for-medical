import { Request, Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
export declare const createFaculty: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getAllFaculty: (req: Request, res: Response) => Promise<void>;
export declare const getFacultyById: (req: Request, res: Response) => Promise<void>;
export declare const updateFaculty: (req: AuthRequest, res: Response) => Promise<void>;
export declare const deleteFaculty: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=facultyController.d.ts.map
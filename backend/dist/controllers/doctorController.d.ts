import { Request, Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
export declare const createDoctor: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getAllDoctors: (req: Request, res: Response) => Promise<void>;
export declare const getDoctorById: (req: Request, res: Response) => Promise<void>;
export declare const updateDoctor: (req: AuthRequest, res: Response) => Promise<void>;
export declare const deleteDoctor: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getDoctorList: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=doctorController.d.ts.map
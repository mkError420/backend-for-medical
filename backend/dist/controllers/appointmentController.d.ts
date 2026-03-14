import { Request, Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
export declare const createAppointment: (req: Request, res: Response) => Promise<void>;
export declare const getAllAppointments: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getAppointmentById: (req: AuthRequest, res: Response) => Promise<void>;
export declare const updateAppointment: (req: AuthRequest, res: Response) => Promise<void>;
export declare const deleteAppointment: (req: AuthRequest, res: Response) => Promise<void>;
export declare const cancelAppointment: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=appointmentController.d.ts.map
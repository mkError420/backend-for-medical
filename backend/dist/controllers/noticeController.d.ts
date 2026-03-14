import { Request, Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
export declare const createNotice: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getAllNotices: (req: Request, res: Response) => Promise<void>;
export declare const getNoticeById: (req: Request, res: Response) => Promise<void>;
export declare const updateNotice: (req: AuthRequest, res: Response) => Promise<void>;
export declare const deleteNotice: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getNoticesByCategory: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=noticeController.d.ts.map
import { Request, Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
export declare const createJournal: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getAllJournals: (req: Request, res: Response) => Promise<void>;
export declare const getJournalById: (req: Request, res: Response) => Promise<void>;
export declare const updateJournal: (req: AuthRequest, res: Response) => Promise<void>;
export declare const deleteJournal: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=journalController.d.ts.map
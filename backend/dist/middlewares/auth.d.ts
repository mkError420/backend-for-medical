import { Request, Response, NextFunction } from 'express';
import { JWTPayload } from '../config/jwt';
export interface AuthRequest extends Request {
    user?: JWTPayload;
}
export declare const authenticate: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
export declare const authorize: (...roles: string[]) => (req: AuthRequest, res: Response, next: NextFunction) => void;
//# sourceMappingURL=auth.d.ts.map
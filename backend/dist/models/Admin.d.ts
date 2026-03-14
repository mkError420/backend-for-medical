import mongoose, { Document } from 'mongoose';
export interface IAdmin extends Document {
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'super_admin';
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}
declare const _default: mongoose.Model<IAdmin, {}, {}, {}, mongoose.Document<unknown, {}, IAdmin, {}, mongoose.DefaultSchemaOptions> & IAdmin & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IAdmin>;
export default _default;
//# sourceMappingURL=Admin.d.ts.map
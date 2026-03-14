import mongoose, { Document } from 'mongoose';
export interface IAdmission extends Document {
    studentName: string;
    email: string;
    phone: string;
    qualification: string;
    documents?: string[];
    status: 'pending' | 'approved' | 'rejected';
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: mongoose.Model<IAdmission, {}, {}, {}, mongoose.Document<unknown, {}, IAdmission, {}, mongoose.DefaultSchemaOptions> & IAdmission & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IAdmission>;
export default _default;
//# sourceMappingURL=Admission.d.ts.map
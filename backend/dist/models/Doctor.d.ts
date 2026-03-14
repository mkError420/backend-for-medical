import mongoose, { Document } from 'mongoose';
export interface IDoctor extends Document {
    name: string;
    specialization: string;
    department: mongoose.Types.ObjectId;
    experience?: number;
    schedule?: {
        days: string[];
        time: string;
    };
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: mongoose.Model<IDoctor, {}, {}, {}, mongoose.Document<unknown, {}, IDoctor, {}, mongoose.DefaultSchemaOptions> & IDoctor & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IDoctor>;
export default _default;
//# sourceMappingURL=Doctor.d.ts.map
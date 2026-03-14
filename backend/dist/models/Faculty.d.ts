import mongoose, { Document } from 'mongoose';
export interface IFaculty extends Document {
    name: string;
    designation: string;
    department: mongoose.Types.ObjectId;
    qualification: string;
    experience?: number;
    profileImage?: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: mongoose.Model<IFaculty, {}, {}, {}, mongoose.Document<unknown, {}, IFaculty, {}, mongoose.DefaultSchemaOptions> & IFaculty & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IFaculty>;
export default _default;
//# sourceMappingURL=Faculty.d.ts.map
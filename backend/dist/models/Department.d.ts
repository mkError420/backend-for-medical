import mongoose, { Document } from 'mongoose';
export interface IDepartment extends Document {
    name: string;
    description: string;
    headOfDepartment: string;
    facilities: string[];
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: mongoose.Model<IDepartment, {}, {}, {}, mongoose.Document<unknown, {}, IDepartment, {}, mongoose.DefaultSchemaOptions> & IDepartment & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IDepartment>;
export default _default;
//# sourceMappingURL=Department.d.ts.map
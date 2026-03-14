import mongoose, { Document } from 'mongoose';
export interface IJournal extends Document {
    title: string;
    author: string;
    abstract: string;
    pdfFile?: string;
    publishedDate?: Date;
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: mongoose.Model<IJournal, {}, {}, {}, mongoose.Document<unknown, {}, IJournal, {}, mongoose.DefaultSchemaOptions> & IJournal & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IJournal>;
export default _default;
//# sourceMappingURL=Journal.d.ts.map
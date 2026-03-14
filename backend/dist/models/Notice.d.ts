import mongoose, { Document } from 'mongoose';
export interface INotice extends Document {
    title: string;
    description: string;
    category: 'general' | 'academic' | 'emergency' | 'event';
    date: Date;
    attachment?: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: mongoose.Model<INotice, {}, {}, {}, mongoose.Document<unknown, {}, INotice, {}, mongoose.DefaultSchemaOptions> & INotice & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, INotice>;
export default _default;
//# sourceMappingURL=Notice.d.ts.map
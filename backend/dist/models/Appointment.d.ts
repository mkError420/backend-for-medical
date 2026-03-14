import mongoose, { Document } from 'mongoose';
export interface IAppointment extends Document {
    patientName: string;
    phone: string;
    doctorId: mongoose.Types.ObjectId;
    date: Date;
    time: string;
    status: 'scheduled' | 'completed' | 'cancelled';
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: mongoose.Model<IAppointment, {}, {}, {}, mongoose.Document<unknown, {}, IAppointment, {}, mongoose.DefaultSchemaOptions> & IAppointment & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IAppointment>;
export default _default;
//# sourceMappingURL=Appointment.d.ts.map
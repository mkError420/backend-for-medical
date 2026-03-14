import mongoose, { Document, Schema } from 'mongoose';

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

const AppointmentSchema: Schema = new Schema({
  patientName: {
    type: String,
    required: [true, 'Patient name is required'],
    trim: true,
    maxlength: [100, 'Patient name cannot exceed 100 characters'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    maxlength: [20, 'Phone number cannot exceed 20 characters'],
  },
  doctorId: {
    type: Schema.Types.ObjectId,
    ref: 'Doctor',
    required: [true, 'Doctor ID is required'],
  },
  date: {
    type: Date,
    required: [true, 'Appointment date is required'],
  },
  time: {
    type: String,
    required: [true, 'Appointment time is required'],
    trim: true,
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled'],
    default: 'scheduled',
  },
}, {
  timestamps: true,
});

// Index for better search performance
AppointmentSchema.index({ patientName: 'text', phone: 'text' });
AppointmentSchema.index({ doctorId: 1 });
AppointmentSchema.index({ date: 1, time: 1 });
AppointmentSchema.index({ status: 1 });

export default mongoose.model<IAppointment>('Appointment', AppointmentSchema);

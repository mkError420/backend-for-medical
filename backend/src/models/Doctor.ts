import mongoose, { Document, Schema } from 'mongoose';

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

const DoctorSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Doctor name is required'],
    trim: true,
    maxlength: [100, 'Doctor name cannot exceed 100 characters'],
  },
  specialization: {
    type: String,
    required: [true, 'Specialization is required'],
    trim: true,
    maxlength: [100, 'Specialization cannot exceed 100 characters'],
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: 'Department',
    required: [true, 'Department is required'],
  },
  experience: {
    type: Number,
    min: [0, 'Experience cannot be negative'],
    default: 0,
  },
  schedule: {
    days: [{
      type: String,
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    }],
    time: {
      type: String,
      trim: true,
    },
  },
}, {
  timestamps: true,
});

// Index for better search performance
DoctorSchema.index({ name: 'text', specialization: 'text' });
DoctorSchema.index({ department: 1 });
DoctorSchema.index({ specialization: 1 });

export default mongoose.model<IDoctor>('Doctor', DoctorSchema);

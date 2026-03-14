import mongoose, { Document, Schema } from 'mongoose';

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

const AdmissionSchema: Schema = new Schema({
  studentName: {
    type: String,
    required: [true, 'Student name is required'],
    trim: true,
    maxlength: [100, 'Student name cannot exceed 100 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email',
    ],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    maxlength: [20, 'Phone number cannot exceed 20 characters'],
  },
  qualification: {
    type: String,
    required: [true, 'Qualification is required'],
    trim: true,
  },
  documents: [{
    type: String,
    trim: true,
  }],
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
}, {
  timestamps: true,
});

// Index for better search performance
AdmissionSchema.index({ studentName: 'text', email: 'text' });
AdmissionSchema.index({ status: 1 });
AdmissionSchema.index({ email: 1 });

export default mongoose.model<IAdmission>('Admission', AdmissionSchema);

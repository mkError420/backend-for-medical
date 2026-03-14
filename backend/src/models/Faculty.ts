import mongoose, { Document, Schema } from 'mongoose';

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

const FacultySchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Faculty name is required'],
    trim: true,
    maxlength: [100, 'Faculty name cannot exceed 100 characters'],
  },
  designation: {
    type: String,
    required: [true, 'Designation is required'],
    trim: true,
    maxlength: [100, 'Designation cannot exceed 100 characters'],
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: 'Department',
    required: [true, 'Department is required'],
  },
  qualification: {
    type: String,
    required: [true, 'Qualification is required'],
    trim: true,
  },
  experience: {
    type: Number,
    min: [0, 'Experience cannot be negative'],
    default: 0,
  },
  profileImage: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
});

// Index for better search performance
FacultySchema.index({ name: 'text', designation: 'text' });
FacultySchema.index({ department: 1 });
FacultySchema.index({ name: 1 });

export default mongoose.model<IFaculty>('Faculty', FacultySchema);

import mongoose, { Document, Schema } from 'mongoose';

export interface IDepartment extends Document {
  name: string;
  description: string;
  headOfDepartment: string;
  facilities: string[];
  createdAt: Date;
  updatedAt: Date;
}

const DepartmentSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Department name is required'],
    trim: true,
    maxlength: [100, 'Department name cannot exceed 100 characters'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
  },
  headOfDepartment: {
    type: String,
    required: [true, 'Head of department is required'],
    trim: true,
    maxlength: [100, 'Head of department name cannot exceed 100 characters'],
  },
  facilities: [{
    type: String,
    trim: true,
  }],
}, {
  timestamps: true,
});

// Index for better search performance
DepartmentSchema.index({ name: 'text', description: 'text' });
DepartmentSchema.index({ name: 1 });

export default mongoose.model<IDepartment>('Department', DepartmentSchema);

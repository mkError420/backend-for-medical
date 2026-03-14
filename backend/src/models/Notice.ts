import mongoose, { Document, Schema } from 'mongoose';

export interface INotice extends Document {
  title: string;
  description: string;
  category: 'general' | 'academic' | 'emergency' | 'event';
  date: Date;
  attachment?: string;
  createdAt: Date;
  updatedAt: Date;
}

const NoticeSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
  },
  category: {
    type: String,
    enum: ['general', 'academic', 'emergency', 'event'],
    required: [true, 'Category is required'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  attachment: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
});

// Index for better search performance
NoticeSchema.index({ title: 'text', description: 'text' });
NoticeSchema.index({ category: 1 });
NoticeSchema.index({ date: -1 });

export default mongoose.model<INotice>('Notice', NoticeSchema);

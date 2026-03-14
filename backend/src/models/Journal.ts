import mongoose, { Document, Schema } from 'mongoose';

export interface IJournal extends Document {
  title: string;
  author: string;
  abstract: string;
  pdfFile?: string;
  publishedDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const JournalSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Article title is required'],
    trim: true,
    maxlength: [200, 'Article title cannot exceed 200 characters'],
  },
  author: {
    type: String,
    required: [true, 'Author name is required'],
    trim: true,
    maxlength: [100, 'Author name cannot exceed 100 characters'],
  },
  abstract: {
    type: String,
    required: [true, 'Abstract is required'],
    trim: true,
  },
  pdfFile: {
    type: String,
    trim: true,
  },
  publishedDate: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

// Index for better search performance
JournalSchema.index({ title: 'text', abstract: 'text', author: 'text' });
JournalSchema.index({ author: 1 });
JournalSchema.index({ publishedDate: -1 });

export default mongoose.model<IJournal>('Journal', JournalSchema);

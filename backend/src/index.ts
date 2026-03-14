import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import path from 'path';

// Load environment variables
dotenv.config({ path: './config.env' });

// Import routes
import authRoutes from './routes/auth';
import noticeRoutes from './routes/notices';
import departmentRoutes from './routes/departments';
import facultyRoutes from './routes/faculty';
import journalRoutes from './routes/journals';
import admissionRoutes from './routes/admissions';
import doctorRoutes from './routes/doctors';
import appointmentRoutes from './routes/appointments';

// Import middleware
import { errorHandler } from './middlewares/errorHandler';
import { notFound } from './middlewares/notFound';

// Import database connection
import { connectDB } from './config/database';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'), // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Middleware
app.use(helmet());
app.use(limiter);
app.use(compression());
app.use(morgan('combined'));
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static files for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Medical College API is running',
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/journals', journalRoutes);
app.use('/api/admissions', admissionRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📚 API Documentation: http://localhost:${PORT}/api-docs`);
  console.log(`🏥 Medical College Backend API`);
});

export default app;

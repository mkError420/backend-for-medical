import dotenv from 'dotenv';
import { connectDB } from './config/database';
import { seedDatabase } from './utils/seedData';

// Load environment variables
dotenv.config({ path: './config.env' });

const seed = async (): Promise<void> => {
  try {
    // Connect to database
    await connectDB();
    
    // Seed the database
    await seedDatabase();
    
    // Close connection
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

seed();

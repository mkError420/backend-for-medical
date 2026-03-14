import dotenv from 'dotenv';
import { connectDB } from './config/database';
import Admin from './models/Admin';
import bcrypt from 'bcryptjs';

// Load environment variables
dotenv.config({ path: './config.env' });

const createAdmin = async (): Promise<void> => {
  try {
    // Connect to database
    await connectDB();
    
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: 'admin@medicalcollege.com' });
    
    if (existingAdmin) {
      console.log('✅ Admin user already exists');
      console.log('📋 Login Credentials:');
      console.log('Email: admin@medicalcollege.com');
      console.log('Password: admin123');
      return;
    }
    
    // Hash password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash('admin123', salt);
    
    // Create admin user
    const admin = new Admin({
      name: 'Super Admin',
      email: 'admin@medicalcollege.com',
      password: hashedPassword,
      role: 'super_admin',
    });
    
    await admin.save();
    
    console.log('✅ Admin user created successfully!');
    console.log('📋 Login Credentials:');
    console.log('Email: admin@medicalcollege.com');
    console.log('Password: admin123');
    
  } catch (error) {
    console.error('❌ Error creating admin:', error);
  } finally {
    process.exit(0);
  }
};

createAdmin();

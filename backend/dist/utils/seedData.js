"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDatabase = void 0;
const Admin_1 = __importDefault(require("../models/Admin"));
const Department_1 = __importDefault(require("../models/Department"));
const Doctor_1 = __importDefault(require("../models/Doctor"));
const Faculty_1 = __importDefault(require("../models/Faculty"));
const Notice_1 = __importDefault(require("../models/Notice"));
const seedDatabase = async () => {
    try {
        await Admin_1.default.deleteMany({});
        await Department_1.default.deleteMany({});
        await Doctor_1.default.deleteMany({});
        await Faculty_1.default.deleteMany({});
        await Notice_1.default.deleteMany({});
        console.log('🗑️ Cleared existing data');
        const admin = new Admin_1.default({
            name: 'Super Admin',
            email: 'admin@medicalcollege.com',
            password: 'admin123',
            role: 'super_admin',
        });
        await admin.save();
        console.log('👤 Created admin user');
        const departments = await Department_1.default.create([
            {
                name: 'General Medicine',
                description: 'Department of General Medicine provides comprehensive healthcare services for adults.',
                headOfDepartment: 'Dr. John Smith',
                facilities: ['Emergency Care', 'ICU', 'General Ward', 'Diagnostic Center'],
            },
            {
                name: 'Cardiology',
                description: 'Specialized department for heart and cardiovascular diseases.',
                headOfDepartment: 'Dr. Emily Johnson',
                facilities: ['Cardiac ICU', 'Cath Lab', 'Echocardiography', 'Stress Test'],
            },
            {
                name: 'Neurology',
                description: 'Department dealing with disorders of the nervous system.',
                headOfDepartment: 'Dr. Michael Brown',
                facilities: ['Neuro ICU', 'EEG Lab', 'EMG Lab', 'Stroke Unit'],
            },
        ]);
        console.log('🏥 Created departments');
        await Doctor_1.default.create([
            {
                name: 'Dr. John Smith',
                specialization: 'General Physician',
                department: departments[0]._id,
                experience: 15,
                schedule: {
                    days: ['Monday', 'Wednesday', 'Friday'],
                    time: '9:00 AM - 5:00 PM',
                },
            },
            {
                name: 'Dr. Emily Johnson',
                specialization: 'Cardiologist',
                department: departments[1]._id,
                experience: 12,
                schedule: {
                    days: ['Tuesday', 'Thursday', 'Saturday'],
                    time: '10:00 AM - 6:00 PM',
                },
            },
            {
                name: 'Dr. Michael Brown',
                specialization: 'Neurologist',
                department: departments[2]._id,
                experience: 18,
                schedule: {
                    days: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
                    time: '8:00 AM - 4:00 PM',
                },
            },
        ]);
        console.log('👨‍⚕️ Created doctors');
        await Faculty_1.default.create([
            {
                name: 'Prof. Sarah Williams',
                designation: 'Professor of Medicine',
                department: departments[0]._id,
                qualification: 'MD, PhD',
                experience: 20,
            },
            {
                name: 'Dr. Robert Davis',
                designation: 'Associate Professor',
                department: departments[1]._id,
                qualification: 'MD, FACC',
                experience: 15,
            },
            {
                name: 'Dr. Lisa Anderson',
                designation: 'Assistant Professor',
                department: departments[2]._id,
                qualification: 'MD, FAAN',
                experience: 8,
            },
        ]);
        console.log('🎓 Created faculty');
        await Notice_1.default.create([
            {
                title: 'Annual Medical Conference 2024',
                description: 'Join us for the annual medical conference featuring the latest advancements in medical science.',
                category: 'event',
                date: new Date('2024-04-15'),
            },
            {
                title: 'New Cardiology Wing Opening',
                description: 'We are pleased to announce the opening of our new state-of-the-art cardiology wing.',
                category: 'general',
                date: new Date('2024-03-20'),
            },
            {
                title: 'Admissions Open for 2024-25',
                description: 'Applications are now open for the academic year 2024-25. Last date to apply is May 31, 2024.',
                category: 'academic',
                date: new Date('2024-03-15'),
            },
        ]);
        console.log('📢 Created notices');
        console.log('✅ Database seeded successfully!');
        console.log('\n📋 Login Credentials:');
        console.log('Email: admin@medicalcollege.com');
        console.log('Password: admin123');
    }
    catch (error) {
        console.error('❌ Error seeding database:', error);
    }
};
exports.seedDatabase = seedDatabase;
//# sourceMappingURL=seedData.js.map
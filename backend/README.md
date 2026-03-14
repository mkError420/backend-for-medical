# Medical College & Hospital Backend API

A comprehensive, production-ready backend API for a medical college and hospital management system built with Node.js, Express, TypeScript, and MongoDB.

## 🚀 Features

- **Authentication & Authorization**: JWT-based authentication with role-based access control
- **RESTful APIs**: Clean, scalable REST API architecture
- **Data Validation**: Comprehensive input validation using Joi
- **File Upload**: Support for image and document uploads
- **Error Handling**: Centralized error handling middleware
- **Security**: Rate limiting, CORS, Helmet, password hashing
- **Pagination**: Built-in pagination and search functionality
- **Database**: MongoDB with Mongoose ODM
- **TypeScript**: Full TypeScript support for type safety

## 📋 Core Modules

### 1. Authentication
- Admin login/logout
- JWT token generation and verification
- Role-based access control (admin, super_admin)

### 2. Notices Management
- Create, read, update, delete notices
- Categories: general, academic, emergency, event
- Search and pagination

### 3. Departments
- Department CRUD operations
- Head of department management
- Facilities tracking

### 4. Faculty Management
- Faculty member CRUD operations
- Department association
- Qualification and experience tracking

### 5. Journal Articles
- Article submission and management
- PDF file support
- Author and publication tracking

### 6. Admissions
- Student application management
- Application status tracking
- Document upload support

### 7. Doctors Management
- Doctor profile management
- Specialization and schedule tracking
- Department association

### 8. Appointments
- Appointment booking system
- Status management (scheduled, completed, cancelled)
- Doctor-patient association

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB
- **ODM**: Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Joi
- **File Upload**: Multer
- **Security**: Helmet, CORS, bcryptjs, express-rate-limit
- **Development**: ts-node-dev

## 📁 Project Structure

```
src/
├── config/          # Configuration files (database, JWT)
├── controllers/     # Route controllers
├── middlewares/     # Custom middlewares (auth, validation, error handling)
├── models/          # Mongoose models
├── routes/          # API routes
├── services/        # Business logic services
├── utils/           # Utility functions (validation, file upload, pagination)
├── uploads/         # File upload directory
└── index.ts         # Application entry point
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Copy the example environment file and update the values:
   ```bash
   cp config.env.example config.env
   ```
   
   Update the following variables in `config.env`:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/medical-college
   JWT_SECRET=your-super-secret-jwt-key
   ```

4. **Database Setup**
   Make sure MongoDB is running on your system or update the `MONGODB_URI` in your environment file.

5. **Seed Database (Optional)**
   To populate the database with sample data:
   ```bash
   npm run seed
   ```
   
   **Default Admin Credentials:**
   - Email: admin@medicalcollege.com
   - Password: admin123

## 🎯 Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

The API will be available at `http://localhost:5000`

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "admin@medicalcollege.com",
  "password": "admin123"
}
```

#### Get Profile
```http
GET /api/auth/profile
Authorization: Bearer <token>
```

### Notices Endpoints

#### Get All Notices
```http
GET /api/notices?page=1&limit=10&search=keyword&category=general
```

#### Create Notice (Admin only)
```http
POST /api/notices
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Notice Title",
  "description": "Notice Description",
  "category": "general",
  "date": "2024-03-20"
}
```

### Departments Endpoints

#### Get All Departments
```http
GET /api/departments?page=1&limit=10&search=keyword
```

#### Create Department (Admin only)
```http
POST /api/departments
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Department Name",
  "description": "Department Description",
  "headOfDepartment": "Dr. Name",
  "facilities": ["Facility 1", "Facility 2"]
}
```

### Faculty Endpoints

#### Get All Faculty
```http
GET /api/faculty?page=1&limit=10&search=keyword&department=departmentId
```

#### Create Faculty (Admin only)
```http
POST /api/faculty
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Faculty Name",
  "designation": "Designation",
  "department": "departmentId",
  "qualification": "Qualification",
  "experience": 10
}
```

### Doctors Endpoints

#### Get All Doctors
```http
GET /api/doctors?page=1&limit=10&search=keyword&specialization=cardiology
```

#### Create Doctor (Admin only)
```http
POST /api/doctors
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Doctor Name",
  "specialization": "Specialization",
  "department": "departmentId",
  "experience": 15,
  "schedule": {
    "days": ["Monday", "Wednesday"],
    "time": "9:00 AM - 5:00 PM"
  }
}
```

### Appointments Endpoints

#### Book Appointment
```http
POST /api/appointments
Content-Type: application/json

{
  "patientName": "Patient Name",
  "phone": "1234567890",
  "doctorId": "doctorId",
  "date": "2024-03-20",
  "time": "10:00 AM"
}
```

#### Get All Appointments (Admin only)
```http
GET /api/appointments?page=1&limit=10&status=scheduled
Authorization: Bearer <token>
```

### Admissions Endpoints

#### Submit Application
```http
POST /api/admissions
Content-Type: application/json

{
  "studentName": "Student Name",
  "email": "student@email.com",
  "phone": "1234567890",
  "qualification": "Qualification"
}
```

#### Get All Applications (Admin only)
```http
GET /api/admissions?page=1&limit=10&status=pending
Authorization: Bearer <token>
```

### Journal Articles Endpoints

#### Get All Articles
```http
GET /api/journals?page=1&limit=10&search=keyword&author=authorName
```

#### Create Article (Admin only)
```http
POST /api/journals
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Article Title",
  "author": "Author Name",
  "abstract": "Article Abstract",
  "publishedDate": "2024-03-20"
}
```

## 🔒 Security Features

- **Password Hashing**: All passwords are hashed using bcryptjs
- **JWT Authentication**: Secure token-based authentication
- **Rate Limiting**: Prevents brute force attacks
- **CORS**: Cross-Origin Resource Sharing protection
- **Helmet**: Security headers for Express.js
- **Input Validation**: Comprehensive input validation using Joi
- **File Upload Security**: Secure file upload with type and size restrictions

## 📝 Response Format

### Success Response
```json
{
  "success": true,
  "data": {},
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "pages": 10
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message",
  "details": ["Validation error details"]
}
```

## 🧪 Testing

The API includes comprehensive validation and error handling. You can test the endpoints using:

1. **Postman**: Import the collection and test all endpoints
2. **cURL**: Use cURL commands for testing
3. **Swagger**: API documentation (if implemented)

## 🚀 Deployment

### Environment Variables
Make sure to set the following environment variables in production:

- `NODE_ENV=production`
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: A strong, secret key for JWT
- `PORT`: The port to run the server on

### Build and Deploy
```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Support

For any issues or questions, please create an issue in the repository or contact the development team.

---

**Note**: This is a backend API only. Make sure to configure the frontend application to connect to this API using the appropriate base URL.

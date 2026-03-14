# Medical College Admin Dashboard

A modern, responsive admin dashboard for managing medical college operations built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Clean, professional interface with Tailwind CSS
- **Authentication**: Secure login system with JWT tokens
- **Dashboard**: Comprehensive overview with statistics and charts
- **Module Management**: 
  - Notices Management
  - Departments Management
  - Faculty Management
  - Journal Articles
  - Admissions
  - Doctors Management
  - Appointments
- **Responsive Design**: Mobile-friendly layout
- **Real-time Updates**: Live data synchronization
- **Type Safety**: Full TypeScript support

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── context/        # React context (Auth)
├── pages/          # Page components
├── services/       # API services
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
├── hooks/          # Custom React hooks
└── styles/         # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:3001`

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000/api
```

## 🔐 Login Credentials

**Default Admin Account:**
- Email: `admin@medicalcollege.com`
- Password: `admin123`

## 📊 Dashboard Features

### Statistics Overview
- Total Faculty count
- Departments overview
- Active notices
- Today's appointments
- Total doctors
- Pending admissions
- Journal articles
- Growth rate metrics

### Quick Actions
- Create new notices
- Add faculty members
- Review admission applications
- View appointments

### Recent Activities
- Real-time activity feed
- Color-coded activity types
- Timestamp information

### Charts & Analytics
- Department overview charts
- Monthly statistics
- Visual data representation

## 🎨 UI Components

### Layout
- **Responsive Sidebar**: Collapsible navigation with all modules
- **Header**: Mobile-friendly header with menu toggle
- **Main Content**: Scrollable content area

### Navigation
- Dashboard
- Notices Management
- Departments
- Faculty
- Journal Articles
- Admissions
- Doctors
- Appointments

### Design System
- **Colors**: Primary (blue), Medical (green), semantic colors
- **Typography**: Inter font family
- **Spacing**: Tailwind's spacing system
- **Components**: Reusable card, button, input components

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Building for Production

```bash
npm run build
npm run preview
```

## 📱 Responsive Design

The dashboard is fully responsive and works on:
- **Desktop**: Full sidebar navigation
- **Tablet**: Collapsible sidebar
- **Mobile**: Hamburger menu with overlay

## 🔗 API Integration

The dashboard connects to the backend API at:
- Development: `http://localhost:5000/api`
- Production: Configurable via `VITE_API_URL`

### Authentication
- JWT token-based authentication
- Automatic token refresh
- Protected routes
- Logout functionality

### API Services
- Auth API (login, profile, logout)
- Notices API (CRUD operations)
- Departments API (management)
- Faculty API (staff management)
- Journals API (publications)
- Admissions API (applications)
- Doctors API (medical staff)
- Appointments API (scheduling)

## 🎯 Key Features

### Authentication
- Secure login form
- Token management
- Auto-logout on token expiry
- User profile display

### Dashboard
- Real-time statistics
- Interactive charts
- Quick action buttons
- Recent activities feed

### Module Management
Each module includes:
- List view with pagination
- Create/Edit forms
- Delete functionality
- Search and filtering
- Status management

## 🚀 Deployment

### Build the application:
```bash
npm run build
```

### Deploy to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Support

For any issues or questions:
1. Check the documentation
2. Review the code comments
3. Create an issue in the repository
4. Contact the development team

---

**Note**: Make sure the backend API is running before starting the dashboard. The dashboard expects the API to be available at `http://localhost:5000/api` by default.

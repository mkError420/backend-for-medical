"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: './config.env' });
const auth_1 = __importDefault(require("./routes/auth"));
const notices_1 = __importDefault(require("./routes/notices"));
const departments_1 = __importDefault(require("./routes/departments"));
const faculty_1 = __importDefault(require("./routes/faculty"));
const journals_1 = __importDefault(require("./routes/journals"));
const admissions_1 = __importDefault(require("./routes/admissions"));
const doctors_1 = __importDefault(require("./routes/doctors"));
const appointments_1 = __importDefault(require("./routes/appointments"));
const errorHandler_1 = require("./middlewares/errorHandler");
const notFound_1 = require("./middlewares/notFound");
const database_1 = require("./config/database");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
(0, database_1.connectDB)();
const limiter = (0, express_rate_limit_1.default)({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'),
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
});
app.use((0, helmet_1.default)());
app.use(limiter);
app.use((0, compression_1.default)());
app.use((0, morgan_1.default)('combined'));
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
}));
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10mb' }));
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, 'uploads')));
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Medical College API is running',
        timestamp: new Date().toISOString(),
    });
});
app.use('/api/auth', auth_1.default);
app.use('/api/notices', notices_1.default);
app.use('/api/departments', departments_1.default);
app.use('/api/faculty', faculty_1.default);
app.use('/api/journals', journals_1.default);
app.use('/api/admissions', admissions_1.default);
app.use('/api/doctors', doctors_1.default);
app.use('/api/appointments', appointments_1.default);
app.use(notFound_1.notFound);
app.use(errorHandler_1.errorHandler);
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`📚 API Documentation: http://localhost:${PORT}/api-docs`);
    console.log(`🏥 Medical College Backend API`);
});
exports.default = app;
//# sourceMappingURL=index.js.map
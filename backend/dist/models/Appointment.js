"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const AppointmentSchema = new mongoose_1.Schema({
    patientName: {
        type: String,
        required: [true, 'Patient name is required'],
        trim: true,
        maxlength: [100, 'Patient name cannot exceed 100 characters'],
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
        maxlength: [20, 'Phone number cannot exceed 20 characters'],
    },
    doctorId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: [true, 'Doctor ID is required'],
    },
    date: {
        type: Date,
        required: [true, 'Appointment date is required'],
    },
    time: {
        type: String,
        required: [true, 'Appointment time is required'],
        trim: true,
    },
    status: {
        type: String,
        enum: ['scheduled', 'completed', 'cancelled'],
        default: 'scheduled',
    },
}, {
    timestamps: true,
});
AppointmentSchema.index({ patientName: 'text', phone: 'text' });
AppointmentSchema.index({ doctorId: 1 });
AppointmentSchema.index({ date: 1, time: 1 });
AppointmentSchema.index({ status: 1 });
exports.default = mongoose_1.default.model('Appointment', AppointmentSchema);
//# sourceMappingURL=Appointment.js.map
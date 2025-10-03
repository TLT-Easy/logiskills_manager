// MongoDB User model - for reference (requires mongoose connection)
/*
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  role: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: ''
  },
  skills: [{
    name: {
      type: String,
      required: true
    },
    level: {
      type: String,
      enum: ['Débutant', 'Intermédiaire', 'Avancé', 'Expert'],
      required: true
    },
    category: {
      type: String,
      required: true
    },
    certifications: [{
      name: String,
      issuer: String,
      dateObtained: Date,
      expirationDate: Date,
      renewalRequired: {
        type: Boolean,
        default: false
      }
    }],
    lastUpdated: {
      type: Date,
      default: Date.now
    }
  }],
  trainingHistory: [{
    title: String,
    category: String,
    dateCompleted: Date,
    duration: Number, // in hours
    provider: String,
    certificateUrl: String
  }],
  availability: {
    type: String,
    enum: ['Disponible', 'Occupé', 'En formation', 'Congés'],
    default: 'Disponible'
  }
}, {
  timestamps: true
})

export default mongoose.model('User', userSchema)
*/

// Mock model structure for reference
export const UserModel = {
  fields: [
    'name', 'email', 'role', 'department', 'phone', 'avatar',
    'skills', 'trainingHistory', 'availability'
  ],
  relationships: [
    'tasks (one-to-many)',
    'notifications (one-to-many)',
    'trainingRecords (one-to-many)'
  ]
}
// MongoDB Task model - for reference
/*
import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  requiredSkills: [{
    name: String,
    minimumLevel: {
      type: String,
      enum: ['Débutant', 'Intermédiaire', 'Avancé', 'Expert']
    }
  }],
  status: {
    type: String,
    enum: ['En attente', 'En cours', 'Terminé', 'Bloqué'],
    default: 'En attente'
  },
  priority: {
    type: String,
    enum: ['Basse', 'Moyenne', 'Haute', 'Critique'],
    default: 'Moyenne'
  },
  dueDate: {
    type: Date,
    required: true
  },
  estimatedHours: {
    type: Number,
    default: 0
  },
  actualHours: {
    type: Number,
    default: 0
  },
  skillMatchScore: {
    type: Number,
    min: 0,
    max: 100
  },
  comments: [{
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    content: String,
    timestamp: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
})

// Calculate skill match score before saving
taskSchema.pre('save', async function() {
  if (this.isModified('assignedTo') || this.isModified('requiredSkills')) {
    // Calculate match score logic here
    this.skillMatchScore = await calculateSkillMatch(this.assignedTo, this.requiredSkills)
  }
})

export default mongoose.model('Task', taskSchema)
*/

export const TaskModel = {
  fields: [
    'title', 'description', 'assignedTo', 'requiredSkills', 'status',
    'priority', 'dueDate', 'estimatedHours', 'actualHours', 'skillMatchScore'
  ],
  relationships: [
    'user (many-to-one)',
    'comments (one-to-many)'
  ]
}
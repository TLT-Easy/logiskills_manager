// MongoDB Notification model - for reference
/*
import mongoose from 'mongoose'

const notificationSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['formation', 'task', 'achievement', 'system'],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  details: [{
    type: String
  }],
  priority: {
    type: String,
    enum: ['Basse', 'Moyenne', 'Haute'],
    default: 'Moyenne'
  },
  isRead: {
    type: Boolean,
    default: false
  },
  readAt: {
    type: Date
  },
  actionRequired: {
    type: Boolean,
    default: false
  },
  actionUrl: {
    type: String
  },
  expirationDate: {
    type: Date
  },
  relatedEntity: {
    entityType: {
      type: String,
      enum: ['task', 'training', 'certification', 'user']
    },
    entityId: {
      type: mongoose.Schema.Types.ObjectId
    }
  }
}, {
  timestamps: true
})

// Index for efficient querying
notificationSchema.index({ userId: 1, isRead: 1, createdAt: -1 })

export default mongoose.model('Notification', notificationSchema)
*/

export const NotificationModel = {
  fields: [
    'type', 'title', 'message', 'userId', 'details', 'priority',
    'isRead', 'actionRequired', 'expirationDate'
  ],
  relationships: [
    'user (many-to-one)',
    'relatedEntity (polymorphic)'
  ]
}
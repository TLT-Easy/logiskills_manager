import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!', timestamp: new Date().toISOString() })
})

// Team routes
app.get('/api/team', (req, res) => {
  // This would connect to MongoDB in production
  res.json({ message: 'Team data would come from MongoDB' })
})

app.get('/api/skills', (req, res) => {
  res.json({ message: 'Skills data would come from MongoDB' })
})

app.get('/api/tasks', (req, res) => {
  res.json({ message: 'Tasks data would come from MongoDB' })
})

app.get('/api/notifications', (req, res) => {
  res.json({ message: 'Notifications data would come from MongoDB' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`API Health check: http://localhost:${PORT}/api/health`)
})
import React from 'react'
import { Users, Award, Calendar, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { mockData } from '../data/mockData'

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']

export default function Dashboard() {
  const stats = [
    { name: 'Membres équipe', value: mockData.team.length, icon: Users, color: 'bg-blue-500' },
    { name: 'Compétences répertoriées', value: '24', icon: Award, color: 'bg-green-500' },
    { name: 'Tâches en cours', value: mockData.tasks.filter(t => t.status === 'En cours').length, icon: Calendar, color: 'bg-yellow-500' },
    { name: 'Formations à renouveler', value: mockData.notifications.filter(n => n.type === 'formation').length, icon: AlertTriangle, color: 'bg-red-500' },
  ]

  const skillsDistribution = [
    { name: 'Expert', value: 12, color: '#10b981' },
    { name: 'Avancé', value: 18, color: '#3b82f6' },
    { name: 'Intermédiaire', value: 25, color: '#f59e0b' },
    { name: 'Débutant', value: 8, color: '#ef4444' },
  ]

  const teamPerformance = mockData.team.map(member => ({
    name: member.name,
    completedTasks: Math.floor(Math.random() * 10) + 5,
    efficiency: Math.floor(Math.random() * 30) + 70
  }))

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-600">
          Vue d'ensemble des compétences et performances de votre équipe
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.name} className="card p-6">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Skills Distribution */}
        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Distribution des niveaux de compétences</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={skillsDistribution}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}`}
              >
                {skillsDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Team Performance */}
        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Performance de l'équipe</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={teamPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="completedTasks" fill="#3b82f6" name="Tâches complétées" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Tasks */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Tâches récentes</h3>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              Voir tout
            </button>
          </div>
          <div className="space-y-3">
            {mockData.tasks.slice(0, 5).map((task) => (
              <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-3 ${
                    task.status === 'Terminé' ? 'bg-green-500' :
                    task.status === 'En cours' ? 'bg-blue-500' : 'bg-gray-400'
                  }`} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{task.title}</p>
                    <p className="text-xs text-gray-600">Assigné à {task.assignedTo}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  task.status === 'Terminé' ? 'bg-green-100 text-green-800' :
                  task.status === 'En cours' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Notifications importantes</h3>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              Voir tout
            </button>
          </div>
          <div className="space-y-3">
            {mockData.notifications.slice(0, 5).map((notification) => (
              <div key={notification.id} className="flex items-start p-3 bg-gray-50 rounded-lg">
                <div className={`p-1 rounded-full mr-3 ${
                  notification.type === 'formation' ? 'bg-red-100' :
                  notification.type === 'task' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  {notification.type === 'formation' ? (
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                  ) : notification.type === 'task' ? (
                    <Calendar className="h-4 w-4 text-blue-600" />
                  ) : (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{notification.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
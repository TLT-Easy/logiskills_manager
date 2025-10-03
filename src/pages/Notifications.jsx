import React, { useState } from 'react'
import { Bell, AlertTriangle, CheckCircle, Calendar, Filter, Search } from 'lucide-react'
import { mockData } from '../data/mockData'

export default function Notifications() {
  const [selectedType, setSelectedType] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredNotifications = mockData.notifications.filter(notification =>
    notification.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedType === '' || notification.type === selectedType)
  )

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'formation': return <AlertTriangle className="h-5 w-5 text-red-500" />
      case 'task': return <Calendar className="h-5 w-5 text-blue-500" />
      case 'achievement': return <CheckCircle className="h-5 w-5 text-green-500" />
      default: return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  const getNotificationStyle = (type) => {
    switch(type) {
      case 'formation': return 'border-red-200 bg-red-50'
      case 'task': return 'border-blue-200 bg-blue-50'
      case 'achievement': return 'border-green-200 bg-green-50'
      default: return 'border-gray-200 bg-white'
    }
  }

  const getTypeLabel = (type) => {
    switch(type) {
      case 'formation': return 'Formation'
      case 'task': return 'Tâche'
      case 'achievement': return 'Réalisation'
      default: return 'Général'
    }
  }

  const getTypeColor = (type) => {
    switch(type) {
      case 'formation': return 'bg-red-100 text-red-800'
      case 'task': return 'bg-blue-100 text-blue-800'
      case 'achievement': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const notificationStats = {
    total: mockData.notifications.length,
    formation: mockData.notifications.filter(n => n.type === 'formation').length,
    task: mockData.notifications.filter(n => n.type === 'task').length,
    achievement: mockData.notifications.filter(n => n.type === 'achievement').length,
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Centre de notifications</h1>
            <p className="mt-1 text-sm text-gray-600">
              Suivez les formations à renouveler et les événements importants
            </p>
          </div>
          <button className="btn-primary flex items-center">
            <Bell className="h-4 w-4 mr-2" />
            Marquer tout comme lu
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="card p-6">
          <div className="flex items-center">
            <div className="bg-gray-500 p-3 rounded-lg">
              <Bell className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total</p>
              <p className="text-2xl font-semibold text-gray-900">{notificationStats.total}</p>
            </div>
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center">
            <div className="bg-red-500 p-3 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Formations</p>
              <p className="text-2xl font-semibold text-gray-900">{notificationStats.formation}</p>
            </div>
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-lg">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Tâches</p>
              <p className="text-2xl font-semibold text-gray-900">{notificationStats.task}</p>
            </div>
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center">
            <div className="bg-green-500 p-3 rounded-lg">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Réalisations</p>
              <p className="text-2xl font-semibold text-gray-900">{notificationStats.achievement}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher dans les notifications..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Tous les types</option>
          <option value="formation">Formations</option>
          <option value="task">Tâches</option>
          <option value="achievement">Réalisations</option>
        </select>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.map((notification) => (
          <div key={notification.id} className={`card p-6 border-l-4 ${getNotificationStyle(notification.type)}`}>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                {getNotificationIcon(notification.type)}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-lg font-medium text-gray-900">{notification.title}</h3>
                      <span className={`ml-3 px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(notification.type)}`}>
                        {getTypeLabel(notification.type)}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{notification.message}</p>
                    
                    {notification.details && (
                      <div className="bg-white bg-opacity-50 rounded-lg p-3 mb-3">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Détails:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {notification.details.map((detail, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">{notification.date}</p>
                      <div className="flex space-x-2">
                        {notification.type === 'formation' && (
                          <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                            Planifier formation
                          </button>
                        )}
                        {notification.type === 'task' && (
                          <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                            Voir la tâche
                          </button>
                        )}
                        <button className="text-sm text-gray-600 hover:text-gray-700">
                          Marquer comme lu
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredNotifications.length === 0 && (
        <div className="text-center py-12">
          <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune notification trouvée</h3>
          <p className="text-gray-600">
            {searchTerm || selectedType 
              ? 'Aucune notification ne correspond à vos critères de recherche.'
              : 'Toutes vos notifications sont à jour !'}
          </p>
        </div>
      )}
    </div>
  )
}
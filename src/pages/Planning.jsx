import React, { useState } from 'react'
import { Calendar, Search, Plus, User, Clock, AlertCircle } from 'lucide-react'
import { mockData } from '../data/mockData'

export default function Planning() {
  const [selectedView, setSelectedView] = useState('list')
  const [selectedStatus, setSelectedStatus] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTasks = mockData.tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedStatus === '' || task.status === selectedStatus)
  )

  const getStatusColor = (status) => {
    switch(status) {
      case 'Terminé': return 'bg-green-100 text-green-800'
      case 'En cours': return 'bg-blue-100 text-blue-800'
      case 'En attente': return 'bg-yellow-100 text-yellow-800'
      case 'Bloqué': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'Haute': return 'text-red-600'
      case 'Moyenne': return 'text-yellow-600'
      case 'Basse': return 'text-green-600'
      default: return 'text-gray-600'
    }
  }

  const getSkillMatchScore = (task, assignedPerson) => {
    const person = mockData.team.find(member => member.name === assignedPerson)
    if (!person) return 0
    
    const personSkills = person.skills.map(s => s.name.toLowerCase())
    const taskSkills = task.requiredSkills.map(s => s.toLowerCase())
    
    const matches = taskSkills.filter(skill => personSkills.includes(skill))
    return Math.round((matches.length / taskSkills.length) * 100)
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Planification des tâches</h1>
            <p className="mt-1 text-sm text-gray-600">
              Optimisez l'affectation des tâches selon les compétences
            </p>
          </div>
          <button className="btn-primary flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Nouvelle tâche
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="card p-6">
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-lg">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Tâches actives</p>
              <p className="text-2xl font-semibold text-gray-900">
                {mockData.tasks.filter(t => t.status === 'En cours').length}
              </p>
            </div>
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center">
            <div className="bg-green-500 p-3 rounded-lg">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Terminées</p>
              <p className="text-2xl font-semibold text-gray-900">
                {mockData.tasks.filter(t => t.status === 'Terminé').length}
              </p>
            </div>
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center">
            <div className="bg-yellow-500 p-3 rounded-lg">
              <AlertCircle className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">En attente</p>
              <p className="text-2xl font-semibold text-gray-900">
                {mockData.tasks.filter(t => t.status === 'En attente').length}
              </p>
            </div>
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center">
            <div className="bg-red-500 p-3 rounded-lg">
              <AlertCircle className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Bloquées</p>
              <p className="text-2xl font-semibold text-gray-900">
                {mockData.tasks.filter(t => t.status === 'Bloqué').length}
              </p>
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
            placeholder="Rechercher une tâche..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="">Tous les statuts</option>
          <option value="En cours">En cours</option>
          <option value="En attente">En attente</option>
          <option value="Terminé">Terminé</option>
          <option value="Bloqué">Bloqué</option>
        </select>
        <div className="flex rounded-lg border border-gray-300">
          <button
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              selectedView === 'list' 
                ? 'bg-primary-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setSelectedView('list')}
          >
            Liste
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-r-lg border-l ${
              selectedView === 'kanban' 
                ? 'bg-primary-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setSelectedView('kanban')}
          >
            Kanban
          </button>
        </div>
      </div>

      {/* Tasks Display */}
      {selectedView === 'list' ? (
        <div className="card">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tâche
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assigné à
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Compétences requises
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priorité
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Échéance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Compatibilité
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTasks.map((task) => {
                  const matchScore = getSkillMatchScore(task, task.assignedTo)
                  return (
                    <tr key={task.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{task.title}</div>
                          <div className="text-sm text-gray-500">{task.description}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2 text-gray-400" />
                          <span className="text-sm text-gray-900">{task.assignedTo}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-wrap gap-1">
                          {task.requiredSkills.slice(0, 2).map((skill, index) => (
                            <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {skill}
                            </span>
                          ))}
                          {task.requiredSkills.length > 2 && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              +{task.requiredSkills.length - 2}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-sm font-medium ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(task.status)}`}>
                          {task.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <Clock className="h-4 w-4 mr-2 text-gray-400" />
                          {task.dueDate}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`w-12 h-2 rounded-full mr-2 ${
                            matchScore >= 80 ? 'bg-green-400' :
                            matchScore >= 60 ? 'bg-yellow-400' : 'bg-red-400'
                          }`}>
                            <div 
                              className="h-2 rounded-full bg-current"
                              style={{ width: `${matchScore}%` }}
                            />
                          </div>
                          <span className={`text-xs font-medium ${
                            matchScore >= 80 ? 'text-green-800' :
                            matchScore >= 60 ? 'text-yellow-800' : 'text-red-800'
                          }`}>
                            {matchScore}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {['En attente', 'En cours', 'Terminé', 'Bloqué'].map((status) => (
            <div key={status} className="card p-4">
              <h3 className={`text-lg font-medium mb-4 ${getStatusColor(status)} px-3 py-1 rounded-full text-center`}>
                {status} ({filteredTasks.filter(t => t.status === status).length})
              </h3>
              <div className="space-y-3">
                {filteredTasks
                  .filter(task => task.status === status)
                  .map((task) => {
                    const matchScore = getSkillMatchScore(task, task.assignedTo)
                    return (
                      <div key={task.id} className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">{task.title}</h4>
                        <p className="text-xs text-gray-600 mb-2">{task.description}</p>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center text-gray-500">
                            <User className="h-3 w-3 mr-1" />
                            {task.assignedTo}
                          </div>
                          <div className={`px-2 py-1 rounded-full ${
                            matchScore >= 80 ? 'bg-green-100 text-green-800' :
                            matchScore >= 60 ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'
                          }`}>
                            {matchScore}%
                          </div>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {task.requiredSkills.slice(0, 2).map((skill, index) => (
                            <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <span className={`text-xs ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </span>
                          <span className="text-xs text-gray-500">{task.dueDate}</span>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
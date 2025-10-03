import React, { useState } from 'react'
import { Search, Plus, TrendingUp, Users, Award } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { mockData } from '../data/mockData'

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  // Aggregate skills data
  const skillsData = {}
  mockData.team.forEach(member => {
    member.skills.forEach(skill => {
      if (!skillsData[skill.name]) {
        skillsData[skill.name] = {
          name: skill.name,
          category: skill.category,
          levels: { 'Débutant': 0, 'Intermédiaire': 0, 'Avancé': 0, 'Expert': 0 },
          totalPeople: 0
        }
      }
      skillsData[skill.name].levels[skill.level]++
      skillsData[skill.name].totalPeople++
    })
  })

  const skillsArray = Object.values(skillsData)
  const categories = [...new Set(skillsArray.map(skill => skill.category))]

  const filteredSkills = skillsArray.filter(skill =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || skill.category === selectedCategory)
  )

  const chartData = filteredSkills.slice(0, 10).map(skill => ({
    name: skill.name,
    Expert: skill.levels.Expert,
    Avancé: skill.levels.Avancé,
    Intermédiaire: skill.levels.Intermédiaire,
    Débutant: skill.levels.Débutant
  }))

  const getSkillGap = (skill) => {
    const expertCount = skill.levels.Expert + skill.levels.Avancé
    const totalCount = skill.totalPeople
    return totalCount > 0 ? Math.round((expertCount / totalCount) * 100) : 0
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Cartographie des compétences</h1>
            <p className="mt-1 text-sm text-gray-600">
              Analysez et gérez les compétences de votre équipe
            </p>
          </div>
          <button className="btn-primary flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Ajouter une compétence
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card p-6">
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-lg">
              <Award className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total compétences</p>
              <p className="text-2xl font-semibold text-gray-900">{skillsArray.length}</p>
            </div>
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center">
            <div className="bg-green-500 p-3 rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Experts identifiés</p>
              <p className="text-2xl font-semibold text-gray-900">
                {skillsArray.reduce((acc, skill) => acc + skill.levels.Expert, 0)}
              </p>
            </div>
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center">
            <div className="bg-yellow-500 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Compétences critiques</p>
              <p className="text-2xl font-semibold text-gray-900">
                {skillsArray.filter(skill => getSkillGap(skill) < 40).length}
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
            placeholder="Rechercher une compétence..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Toutes les catégories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Skills Chart */}
      <div className="card p-6 mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Distribution des niveaux par compétence</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Expert" stackId="a" fill="#10b981" />
            <Bar dataKey="Avancé" stackId="a" fill="#3b82f6" />
            <Bar dataKey="Intermédiaire" stackId="a" fill="#f59e0b" />
            <Bar dataKey="Débutant" stackId="a" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => {
          const gapPercentage = getSkillGap(skill)
          const isSkillGap = gapPercentage < 40
          
          return (
            <div key={skill.name} className={`card p-6 ${isSkillGap ? 'border-red-200 bg-red-50' : ''}`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-medium text-gray-900">{skill.name}</h3>
                  <p className="text-sm text-gray-600">{skill.category}</p>
                </div>
                {isSkillGap && (
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                    Lacune critique
                  </span>
                )}
              </div>
              
              <div className="space-y-2 mb-4">
                {Object.entries(skill.levels).map(([level, count]) => (
                  <div key={level} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{level}</span>
                    <div className="flex items-center">
                      <div className="w-20 h-2 bg-gray-200 rounded-full mr-2">
                        <div 
                          className={`h-2 rounded-full ${
                            level === 'Expert' ? 'bg-green-500' :
                            level === 'Avancé' ? 'bg-blue-500' :
                            level === 'Intermédiaire' ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${(count / skill.totalPeople) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{count}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-600">
                  <Users className="h-4 w-4 mr-1" />
                  {skill.totalPeople} personnes
                </div>
                <div className={`flex items-center ${isSkillGap ? 'text-red-600' : 'text-green-600'}`}>
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {gapPercentage}% expertise
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
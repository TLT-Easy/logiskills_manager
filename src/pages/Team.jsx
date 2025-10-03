import React, { useState } from 'react'
import { Search, Plus, Mail, Phone, MapPin, Award, TrendingUp } from 'lucide-react'
import { mockData } from '../data/mockData'

export default function Team() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMember, setSelectedMember] = useState(null)
  const [filterSkill, setFilterSkill] = useState('')

  const filteredTeam = mockData.team.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.skills.some(skill => skill.name.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const allSkills = [...new Set(mockData.team.flatMap(member => member.skills.map(skill => skill.name)))]

  const getSkillLevelClass = (level) => {
    switch(level) {
      case 'Expert': return 'skill-expert'
      case 'Avancé': return 'skill-advanced'  
      case 'Intermédiaire': return 'skill-intermediate'
      case 'Débutant': return 'skill-beginner'
      default: return 'skill-beginner'
    }
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Gestion de l'équipe</h1>
            <p className="mt-1 text-sm text-gray-600">
              Gérez les profils et compétences de votre équipe
            </p>
          </div>
          <button className="btn-primary flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Ajouter un membre
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher par nom, rôle ou compétence..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          value={filterSkill}
          onChange={(e) => setFilterSkill(e.target.value)}
        >
          <option value="">Toutes les compétences</option>
          {allSkills.map(skill => (
            <option key={skill} value={skill}>{skill}</option>
          ))}
        </select>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeam.map((member) => (
          <div 
            key={member.id} 
            className="card p-6 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedMember(member)}
          >
            <div className="flex items-center mb-4">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={member.avatar}
                alt={member.name}
              />
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <Mail className="h-4 w-4 mr-2" />
                {member.email}
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <Phone className="h-4 w-4 mr-2" />
                {member.phone}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                {member.department}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Compétences principales</h4>
              <div className="flex flex-wrap gap-1">
                {member.skills.slice(0, 3).map((skill, index) => (
                  <span key={index} className={getSkillLevelClass(skill.level)}>
                    {skill.name}
                  </span>
                ))}
                {member.skills.length > 3 && (
                  <span className="skill-badge bg-gray-100 text-gray-600">
                    +{member.skills.length - 3}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                Disponible
              </div>
              <div className="flex items-center text-gray-600">
                <Award className="h-4 w-4 mr-1" />
                {member.skills.length} compétences
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <img
                    className="h-16 w-16 rounded-full object-cover"
                    src={selectedMember.avatar}
                    alt={selectedMember.name}
                  />
                  <div className="ml-4">
                    <h2 className="text-xl font-bold text-gray-900">{selectedMember.name}</h2>
                    <p className="text-gray-600">{selectedMember.role}</p>
                    <p className="text-sm text-gray-500">{selectedMember.department}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Informations de contact</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Mail className="h-4 w-4 mr-3 text-gray-400" />
                      {selectedMember.email}
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 mr-3 text-gray-400" />
                      {selectedMember.phone}
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-3 text-gray-400" />
                      {selectedMember.department}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Toutes les compétences</h3>
                  <div className="space-y-3">
                    {selectedMember.skills.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className={getSkillLevelClass(skill.level)}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="btn-secondary"
                >
                  Fermer
                </button>
                <button className="btn-primary">
                  Modifier le profil
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
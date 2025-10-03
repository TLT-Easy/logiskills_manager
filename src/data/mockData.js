// Mock data for development
export const mockData = {
  team: [
    {
      id: 1,
      name: 'Marie Dubois',
      role: 'Développeuse Senior',
      email: 'marie.dubois@logiskills.com',
      phone: '+33 1 23 45 67 89',
      department: 'Développement',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&q=80',
      skills: [
        { name: 'React', level: 'Expert', category: 'Frontend' },
        { name: 'Node.js', level: 'Avancé', category: 'Backend' },
        { name: 'MongoDB', level: 'Avancé', category: 'Base de données' },
        { name: 'TypeScript', level: 'Expert', category: 'Programmation' },
        { name: 'Docker', level: 'Intermédiaire', category: 'DevOps' }
      ]
    },
    {
      id: 2,
      name: 'Pierre Martin',
      role: 'Chef de Projet',
      email: 'pierre.martin@logiskills.com',
      phone: '+33 1 23 45 67 90',
      department: 'Management',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80',
      skills: [
        { name: 'Gestion de projet', level: 'Expert', category: 'Management' },
        { name: 'Agile/Scrum', level: 'Expert', category: 'Méthodologie' },
        { name: 'Leadership', level: 'Avancé', category: 'Management' },
        { name: 'Communication', level: 'Expert', category: 'Soft Skills' },
        { name: 'Analyse des risques', level: 'Avancé', category: 'Management' }
      ]
    },
    {
      id: 3,
      name: 'Sophie Bernard',
      role: 'UX/UI Designer',
      email: 'sophie.bernard@logiskills.com',
      phone: '+33 1 23 45 67 91',
      department: 'Design',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80',
      skills: [
        { name: 'Figma', level: 'Expert', category: 'Design' },
        { name: 'Adobe Creative Suite', level: 'Expert', category: 'Design' },
        { name: 'UX Research', level: 'Avancé', category: 'Research' },
        { name: 'Prototypage', level: 'Expert', category: 'Design' },
        { name: 'Design System', level: 'Avancé', category: 'Design' }
      ]
    },
    {
      id: 4,
      name: 'Thomas Lefèvre',
      role: 'Développeur Backend',
      email: 'thomas.lefevre@logiskills.com',
      phone: '+33 1 23 45 67 92',
      department: 'Développement',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80',
      skills: [
        { name: 'Python', level: 'Expert', category: 'Programmation' },
        { name: 'Django', level: 'Avancé', category: 'Backend' },
        { name: 'PostgreSQL', level: 'Avancé', category: 'Base de données' },
        { name: 'API REST', level: 'Expert', category: 'Backend' },
        { name: 'AWS', level: 'Intermédiaire', category: 'Cloud' }
      ]
    },
    {
      id: 5,
      name: 'Julie Moreau',
      role: 'Data Analyst',
      email: 'julie.moreau@logiskills.com',
      phone: '+33 1 23 45 67 93',
      department: 'Analytics',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&q=80',
      skills: [
        { name: 'Excel', level: 'Expert', category: 'Outils' },
        { name: 'SQL', level: 'Avancé', category: 'Base de données' },
        { name: 'Python', level: 'Intermédiaire', category: 'Programmation' },
        { name: 'Tableau', level: 'Expert', category: 'Visualisation' },
        { name: 'Power BI', level: 'Avancé', category: 'Visualisation' }
      ]
    },
    {
      id: 6,
      name: 'Antoine Roux',
      role: 'DevOps Engineer',
      email: 'antoine.roux@logiskills.com',
      phone: '+33 1 23 45 67 94',
      department: 'Infrastructure',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&q=80',
      skills: [
        { name: 'Docker', level: 'Expert', category: 'DevOps' },
        { name: 'Kubernetes', level: 'Avancé', category: 'DevOps' },
        { name: 'AWS', level: 'Expert', category: 'Cloud' },
        { name: 'Jenkins', level: 'Avancé', category: 'CI/CD' },
        { name: 'Terraform', level: 'Intermédiaire', category: 'Infrastructure' }
      ]
    }
  ],

  tasks: [
    {
      id: 1,
      title: 'Développement API utilisateurs',
      description: 'Créer les endpoints pour la gestion des utilisateurs',
      assignedTo: 'Thomas Lefèvre',
      status: 'En cours',
      priority: 'Haute',
      dueDate: '2024-02-15',
      requiredSkills: ['Python', 'Django', 'API REST']
    },
    {
      id: 2,
      title: 'Design système de notifications',
      description: 'Concevoir l\'interface pour le centre de notifications',
      assignedTo: 'Sophie Bernard',
      status: 'En cours',
      priority: 'Moyenne',
      dueDate: '2024-02-20',
      requiredSkills: ['Figma', 'UX Research', 'Prototypage']
    },
    {
      id: 3,
      title: 'Configuration CI/CD',
      description: 'Mettre en place le pipeline de déploiement automatique',
      assignedTo: 'Antoine Roux',
      status: 'En attente',
      priority: 'Haute',
      dueDate: '2024-02-18',
      requiredSkills: ['Docker', 'Jenkins', 'AWS']
    },
    {
      id: 4,
      title: 'Analyse des métriques utilisateurs',
      description: 'Créer des rapports sur l\'engagement utilisateur',
      assignedTo: 'Julie Moreau',
      status: 'Terminé',
      priority: 'Basse',
      dueDate: '2024-02-10',
      requiredSkills: ['SQL', 'Tableau', 'Excel']
    },
    {
      id: 5,
      title: 'Formation équipe Agile',
      description: 'Organiser une session de formation sur les méthodes agiles',
      assignedTo: 'Pierre Martin',
      status: 'En cours',
      priority: 'Moyenne',
      dueDate: '2024-02-25',
      requiredSkills: ['Agile/Scrum', 'Leadership', 'Communication']
    },
    {
      id: 6,
      title: 'Intégration composants React',
      description: 'Intégrer les nouveaux composants UI dans l\'application',
      assignedTo: 'Marie Dubois',
      status: 'En attente',
      priority: 'Moyenne',
      dueDate: '2024-02-22',
      requiredSkills: ['React', 'TypeScript', 'Frontend']
    },
    {
      id: 7,
      title: 'Migration base de données',
      description: 'Migrer les données vers la nouvelle structure',
      assignedTo: 'Thomas Lefèvre',
      status: 'Bloqué',
      priority: 'Haute',
      dueDate: '2024-02-16',
      requiredSkills: ['PostgreSQL', 'Python', 'Migration']
    }
  ],

  notifications: [
    {
      id: 1,
      type: 'formation',
      title: 'Formation sécurité à renouveler',
      message: 'La certification sécurité informatique de Marie Dubois expire dans 30 jours.',
      date: '2024-01-15',
      details: [
        'Certification: Sécurité Informatique CISSP',
        'Date d\'expiration: 15 février 2024',
        'Durée de renouvellement: 2 jours',
        'Organisme: ISACA France'
      ]
    },
    {
      id: 2,
      type: 'task',
      title: 'Nouvelle tâche assignée',
      message: 'Une nouvelle tâche "Configuration CI/CD" a été assignée à Antoine Roux.',
      date: '2024-01-14',
      details: [
        'Tâche: Configuration CI/CD',
        'Priorité: Haute',
        'Échéance: 18 février 2024',
        'Compétences requises: Docker, Jenkins, AWS'
      ]
    },
    {
      id: 3,
      type: 'formation',
      title: 'Formation Kubernetes requise',
      message: 'Antoine Roux doit suivre une formation Kubernetes pour sa montée en compétences.',
      date: '2024-01-13',
      details: [
        'Formation: Kubernetes Administration',
        'Niveau: Intermédiaire vers Avancé',
        'Durée estimée: 3 jours',
        'Justification: Nouveau projet avec architecture microservices'
      ]
    },
    {
      id: 4,
      type: 'achievement',
      title: 'Certification obtenue',
      message: 'Sophie Bernard a obtenu sa certification Adobe Certified Expert.',
      date: '2024-01-12',
      details: [
        'Certification: Adobe Certified Expert - Photoshop',
        'Score: 92/100',
        'Validité: 2 ans',
        'Avantages: Élargissement des compétences design'
      ]
    },
    {
      id: 5,
      type: 'formation',
      title: 'Mise à jour compétences Python',
      message: 'Julie Moreau devrait suivre une formation Python avancée pour améliorer ses analyses.',
      date: '2024-01-11',
      details: [
        'Formation: Python pour Data Science',
        'Niveau actuel: Intermédiaire',
        'Objectif: Avancé',
        'Modules: Pandas, NumPy, Machine Learning'
      ]
    },
    {
      id: 6,
      type: 'task',
      title: 'Tâche en retard',
      message: 'La tâche "Migration base de données" est en retard et nécessite une attention immédiate.',
      date: '2024-01-10',
      details: [
        'Tâche: Migration base de données',
        'Assigné à: Thomas Lefèvre',
        'Retard: 2 jours',
        'Impact: Bloque autres développements'
      ]
    },
    {
      id: 7,
      type: 'formation',
      title: 'Renouvellement PMP',
      message: 'La certification PMP de Pierre Martin expire dans 60 jours.',
      date: '2024-01-09',
      details: [
        'Certification: Project Management Professional',
        'Date d\'expiration: 15 mars 2024',
        'PDU requis: 60 unités',
        'Options: Formation continue ou examen'
      ]
    },
    {
      id: 8,
      type: 'achievement',
      title: 'Projet terminé avec succès',
      message: 'L\'équipe a terminé le projet "Refonte Dashboard" avec 2 jours d\'avance.',
      date: '2024-01-08',
      details: [
        'Projet: Refonte Dashboard Analytics',
        'Équipe: Marie Dubois, Sophie Bernard, Julie Moreau',
        'Durée: 3 semaines',
        'Résultat: +40% d\'engagement utilisateur'
      ]
    }
  ]
}
# LogiSkills Manager

Un tableau de bord interactif pour la gestion des compétences d'équipe avec optimisation de l'affectation des tâches.

## 🚀 Fonctionnalités

### ✨ Dashboard Interactif
- Vue d'ensemble des compétences de l'équipe
- Graphiques de distribution des niveaux de compétences
- Métriques de performance en temps réel
- Notifications importantes

### 👥 Gestion d'équipe
- Profils détaillés des membres
- Cartographie des compétences individuelles
- Suivi des évolutions de carrière
- Recherche et filtrage avancés

### 📊 Cartographie des compétences
- Analyse des lacunes de compétences
- Identification des experts par domaine
- Visualisation des niveaux par compétence
- Recommandations de formation

### 📅 Planification intelligente
- Affectation optimisée des tâches selon les compétences
- Score de compatibilité automatique
- Vue Kanban et liste des tâches
- Suivi des échéances et priorités

### 🔔 Centre de notifications
- Alertes de formations à renouveler
- Notifications de nouvelles tâches
- Suivi des certifications
- Historique des réalisations

## 🛠️ Technologies

- **Frontend**: React 18, React Router, Tailwind CSS
- **Visualisation**: Recharts pour les graphiques interactifs
- **Icons**: Lucide React pour une interface moderne
- **Backend**: Node.js, Express.js
- **Base de données**: MongoDB (avec modèles Mongoose)
- **Authentification**: JWT (structure prête)

## 🚀 Installation locale

### Prérequis
- Node.js 16+
- MongoDB 4.4+

### Étapes d'installation

1. **Téléchargez le projet** depuis l'IDE Web
2. **Installez MongoDB** sur votre système
3. **Installez les dépendances**:
   ```bash
   npm install
   ```

4. **Configuration de l'environnement**:
   ```bash
   cp .env.example .env
   # Modifiez les variables dans .env selon votre configuration
   ```

5. **Démarrage de MongoDB**:
   ```bash
   mongod --dbpath /path/to/your/db
   ```

6. **Lancement de l'application**:
   ```bash
   npm run dev
   ```

L'application sera accessible sur http://localhost:3000
L'API sera disponible sur http://localhost:5000

## 📁 Structure du projet

```
logiskills-manager/
├── src/                    # Code React frontend
│   ├── components/         # Composants réutilisables
│   ├── pages/             # Pages principales
│   ├── data/              # Données de démonstration
│   └── ...
├── server/                # Backend Node.js
│   ├── models/            # Modèles MongoDB
│   ├── routes/            # Routes API
│   └── server.js          # Point d'entrée serveur
└── package.json
```

## 🔧 Configuration MongoDB

Pour une utilisation en production, configurez MongoDB avec les collections suivantes:

- `users` - Profils des membres de l'équipe
- `tasks` - Tâches et affectations
- `notifications` - Centre de notifications
- `skills` - Référentiel des compétences
- `trainings` - Formations et certifications

Les modèles Mongoose sont fournis dans `/server/models/` comme référence.

## 🎯 Utilisation

1. **Dashboard**: Vue d'ensemble des métriques importantes
2. **Équipe**: Gérez les profils et compétences
3. **Compétences**: Analysez les lacunes et expertises
4. **Planification**: Créez et assignez des tâches optimalement
5. **Notifications**: Suivez les formations et événements

## 📈 Fonctionnalités clés

### Optimisation automatique
- **Score de compatibilité**: Calcul automatique de l'adéquation compétences/tâche
- **Recommandations**: Suggestions d'affectation basées sur l'expertise
- **Alerts formation**: Notifications automatiques pour les renouvellements

### Visualisations avancées
- **Graphiques interactifs**: Distribution des compétences par équipe
- **Tableaux de bord**: Métriques en temps réel
- **Vue Kanban**: Suivi visuel des tâches

### Interface moderne
- **Design responsive**: Optimisé mobile et desktop  
- **Navigation intuitive**: Interface utilisateur soignée
- **Interactions fluides**: Transitions et animations

## 🤝 Contribution

Ce projet est une démonstration complète d'un système de gestion des compétences. 
Pour l'adapter à vos besoins spécifiques:

1. Configurez votre base MongoDB
2. Adaptez les modèles de données
3. Personnalisez les métriques et indicateurs
4. Intégrez vos systèmes existants

## 📝 Notes de développement

- **Données de démonstration**: Le projet utilise des données mockées pour la présentation
- **Authentification**: Structure JWT prête, à connecter selon vos besoins
- **Scalabilité**: Architecture modulaire pour faciliter les extensions
- **Performance**: Optimisations incluses (lazy loading, memoization)
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Team from './pages/Team'
import Skills from './pages/Skills'
import Planning from './pages/Planning'
import Notifications from './pages/Notifications'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
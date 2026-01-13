import { useState } from 'preact/hooks'
import './app.css'
import Layout from './Layout.jsx'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home.jsx'
import LegalExplainerPage from './pages/LegalExxplainer.jsx'
import ConstitutionPage from './pages/Constitution.jsx'
import CoursesPage from './pages/Course.jsx'
import ConsultationPage from './pages/consultation.jsx'
import CourseDetailPage from './pages/CourseDetails.jsx'
import FeedbackPage from './pages/Feedback.jsx'

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LegalExplainer" element={<LegalExplainerPage />} />
        <Route path="/constitution" element={<ConstitutionPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/courses/:id" element={<CourseDetailPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </Layout>
  )
}

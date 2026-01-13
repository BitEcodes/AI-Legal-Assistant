
import { render } from 'preact';
import './index.css';
import { App } from './app.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home.jsx';
import LegalExplainerPage from './pages/LegalExxplainer.jsx';
import ConstitutionPage from './pages/Constitution.jsx';
import CoursesPage from './pages/Course.jsx';
import ConsultationPage from './pages/consultation.jsx';
import CourseDetailPage from './pages/CourseDetails.jsx';
import FeedbackPage from './pages/Feedback.jsx';
import Layout from './Layout.jsx'
import CourseDetails from "@/pages/CourseDetails.jsx";
import ConstitutionDetails from './pages/ConstitutionDetails.jsx';


render(
	<BrowserRouter>
	<Layout >
		<Routes>

			<Route path="/" element={<HomePage />} />
			<Route path="/LegalExplainer" element={<LegalExplainerPage />} />
			<Route path="/Constitution" element={<ConstitutionPage />} />
			<Route path="/Courses" element={<CoursesPage />} />
			<Route path="/Consultation" element={<ConsultationPage />} />
			<Route path="/CourseDetails" element={<CourseDetailPage />} />
			<Route path="/Feedback" element={<FeedbackPage />} />
			<Route path="/constitution/article" element={<ConstitutionDetails />} />


<Route path="/CourseDetail" element={<CourseDetails />} />

		</Routes>
		</Layout>
	</BrowserRouter>,
	document.getElementById('app')
);

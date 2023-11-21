import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';
import ErrorPage from './pages/Error';
import Topbar from './components/Topbar/Topbar';

function App() {

  return (
    <>
      <Topbar />
      <div>
      <Routes>
          <Route path="/" element={<HomePage />} errorElement={<ErrorPage/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App

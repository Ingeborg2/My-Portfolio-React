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
          <Route index element={<HomePage />}/>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App

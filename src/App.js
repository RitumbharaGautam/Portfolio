import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Projects from './components/Projects';
import { Footer } from './components/Footer';
import Contact from './components/Contact';
import {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
    <div className="App">
       {loading && (
      <div id="preloader">
        <div className="spinner"></div>
      </div>
    )}
    <Navbar />
     <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />

        <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

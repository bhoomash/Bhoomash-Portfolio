import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import LoadingScreen from './components/LoadingScreen';
import Background3D from './components/Background3D';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Context
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        {loading ? (
          <LoadingScreen />
        ) : (
          <div className="min-h-screen flex flex-col transition-colors duration-300 text-gray-900 dark:text-gray-100">
            <Background3D />
            <Navbar />
            <main className="flex-grow backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </main>
            <div className="fixed bottom-6 right-6 z-50">
              <ThemeToggle />
            </div>
            <Footer />
          </div>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
import { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import LoadingScreen from './components/LoadingScreen';
import ErrorBoundary from './components/ErrorBoundary';

// Context
import { ThemeProvider } from './context/ThemeContext';

// Lazy load pages for code splitting
import { lazy } from 'react';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Lazy load Background3D since it contains Three.js
const Background3D = lazy(() => import('./components/Background3D'));

function App() {
  const [loading, setLoading] = useState(true);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
      // Load background after main content is ready
      setTimeout(() => setShowBackground(true), 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ErrorBoundary>
          {loading ? (
            <LoadingScreen />
          ) : (
            <div className="min-h-screen flex flex-col transition-colors duration-300 text-gray-900 dark:text-gray-100">
              {showBackground && (
                <Suspense fallback={<div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800" />}>
                  <Background3D />
                </Suspense>
              )}
              <Navbar />
              <main className="flex-grow backdrop-blur-sm">
                <AnimatePresence mode="wait">
                  <Suspense fallback={
                    <div className="min-h-screen flex items-center justify-center">
                      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
                    </div>
                  }>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                </AnimatePresence>
              </main>
              <div className="fixed bottom-6 right-6 z-50">
                <ThemeToggle />
              </div>
              <Footer />
            </div>
          )}
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
}

export default App;
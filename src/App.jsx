import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Footer } from './components/global/Footer';
import { Header } from './components/global/Header';
import { About } from './components/pages/about/About';
import { Prices } from './components/pages/prices/Prices';
import { createContext, useEffect, useState } from 'react';
import { FetchModal } from './components/UI/FetchModal';
import { PrivacyPolicy } from './components/pages/privacyPolicy/PrivacyPolicy';
import { Preloader } from './components/global/Preloader';

export const languageContext = createContext('no provider');
export const fetchModalContext = createContext('no provider');

function App() {
  const [loading, setLoading] = useState(true);
  const [preloaderOpacity, setPreloaderOpacity] = useState(false)
  const [language, setLanguage] = useState('ru');
  const [fetchModal, setFetchModal] = useState('close');
  const location = useLocation();

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPreloaderOpacity(true);
      const timer2 = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer2);
    }, 2000);
    return () => clearTimeout(timer1);
  }, []);


  return (
    <>
      <languageContext.Provider value={{ language, setLanguage }}>
        <fetchModalContext.Provider value={{ fetchModal, setFetchModal }}>
          <div className='wrapper'>
            {location.pathname !== '/' && <Header logo={true} />}
            <main className="main">
              <Routes>
                <Route path='/' element={<About />} />
                <Route path='/prices' element={<Prices />} />
                <Route path='/privacypolicy' element={<PrivacyPolicy />} />
                <Route path='*' element={<Navigate to="/" replace/>} />
              </Routes>
              <FetchModal fetchModal={fetchModal} />
            </main>
            <Footer />
            {loading ? <Preloader opacity={preloaderOpacity} /> : null}
          </div>
        </fetchModalContext.Provider>
      </languageContext.Provider>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
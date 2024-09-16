import { useState } from 'react';
import { useEffect } from 'react';
import './App.scss';
import Header from '../Components/Header/Header';
import Home from '../Pages/Home/Home';
import Cookies from '../Components/Cookies/Cookies';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Privacy from '../Pages/Privacy/Privacy';
import Terms from '../Pages/Terms/Terms';
import CookieSettings from '../Pages/CookieSettings/CookieSettings';
import Footer from '../Components/Footer/Footer';

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView();
      }
    }
  }, []);
  return (
    <Router>
      <div className="app">
        <div className="app__container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/privacy" element={<Privacy />}></Route>
            <Route path="/terms" element={<Terms />}></Route>
            <Route path="/cookie-settings" element={<CookieSettings />}></Route>
          </Routes>
          <Footer />
          <Cookies />
        </div>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomeSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default App;
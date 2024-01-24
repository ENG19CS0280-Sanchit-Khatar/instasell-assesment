import React from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent'
import Intro from './introSection/Intro';
import { AppProvider } from '@shopify/polaris';
import HeroSection from './heroSection/HeroSection';
function App() {
  return (
    <div className="App">
      <AppProvider>
      <NavbarComponent />
      <Intro />
      <HeroSection />
      </AppProvider>
    </div>
  );
}

export default App;

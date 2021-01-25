import React from 'react';
import './styles/main.scss';
import LandingScreen from './components/Landing/LandingScreen';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <LandingScreen />
    </>
  );
}

export default App;

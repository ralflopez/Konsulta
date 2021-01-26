import React from 'react';
import './styles/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingScreen from './components/Landing/LandingScreen';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' component={LandingScreen} />
      </Switch>
    </Router>
  );
}

export default App;

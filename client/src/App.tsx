import React from 'react';
import './styles/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import LandingScreen from './components/Landing/LandingScreen';
import ChatScreen from './components/Chat/ChatScreen';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={LandingScreen} />
        <Route path="/consult" component={ChatScreen} />
      </Switch>
    </Router>
  );
}

export default App;

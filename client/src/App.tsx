import React from 'react';
import './styles/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import LandingScreen from './components/Landing/LandingScreen';
import ChatScreen from './components/Chat/ChatScreen';
import ListScreen from './components/List/ListScreen';
import FacilityScreen from './components/Facility/FacilityScreen';
import ProfileScreen from './components/Profile/ProfileScreen';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={LandingScreen} />
        <Route path="/consult" component={ListScreen} />
        <Route path="/profile" component={ProfileScreen} />
      </Switch>
    </Router>
  );
}

export default App;

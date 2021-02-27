import React from 'react';
import './styles/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavBar from './components/Navbar/NavBar';
import LandingScreen from './components/Landing/LandingScreen';
import ChatScreen from './components/Chat/ChatScreen';
import ListScreen from './components/List/ListScreen';
import ProfileScreen from './components/Profile/ProfileScreen';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={LandingScreen} />
          <Route path="/consult" component={ListScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/chat" component={ChatScreen} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

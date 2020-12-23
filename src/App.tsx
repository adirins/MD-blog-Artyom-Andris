import React from 'react';
import './App.css';
import 'flexboxgrid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Header from './components/header';
import FullArticle from './pages/fullArticle';
import NotFound from './pages/notFound';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/article/:id">
          <FullArticle />
        </Route>
        <Route path="/">
          <NotFound currentURL={window.location.href} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

import './App.css';
import Menu from './Menu/Menu.js';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Admin, Schedule, Instructor } from './pages/';

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/instructor" component={Instructor} />
        <Route exact path={['/', '/home']} component={Home} />
        <Route exact patn="/admin" component={Admin} />
      </Switch>
    </div>
  );
}

export default App;

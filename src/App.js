import './App.css';
import Menu from './Menu/Menu.js';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Admin, Schedule, Instructor } from './pages/';

function App() {
  const [instructor, setInstructor] = React.useState([])
  const [application, setApplication] = React.useState([])
  const [schedule, setSchedule] = React.useState([])

  const addInst = (data) => {
    setInstructor((prev) => [...prev, data]);
  };
  const addApplication = (aplic) => {
    setApplication((prev) => [...prev,aplic]);
    console.log(application)
  };
  const addSched = (schedl) => {
    setSchedule((prev) => [...prev, schedl]);
    console.log(schedule);
  };

  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route
          exact
          path="/schedule"
          render={() => <Schedule schedule={schedule} />}
        />
        <Route
          exact
          path="/instructor"
          render={() => <Instructor instructor={instructor} />}
        />
        <Route
          exact
          path={['/', '/home']}
          render={() => <Home addApplication={addApplication} />}
        />
        <Route
          exact
          patn="/admin"
          render={() => (
            <Admin application={application} addInst={addInst} addSched={addSched} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;

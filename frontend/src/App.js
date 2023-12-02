// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/login.js';
import Register from './components/Auth/register.js';
import Dashboard from './components/dashboard.js';
import CreateEntryForm from './components/createentryform.js';
import EditEntryForm from './components/editentryform.js';

function App() {
  return (
    <Router>
      <Switch>
        {/* Authentication Routes */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        {/* Other Routes */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create" component={CreateEntryForm} />
        <Route path="/edit/:entryId" component={EditEntryForm} />
      </Switch>
    </Router>
  );
}

export default App;

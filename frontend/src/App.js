// src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/login';
import Register from './components/Auth/register';
import Dashboard from './components/dashboard';
import CreateEntryForm from './components/createentryform';
import EditEntryForm from './components/editentryform';

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

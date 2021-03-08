import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Switch>
            <Route path="/" exact>
              <h1>This is the homepage</h1>
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;

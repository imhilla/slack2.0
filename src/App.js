import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import styled from 'styled-components';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Chat from './Components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './Components/Login'


function App() {
  const [user, loading] = useAuthState(auth)

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>

            <Header />
            <AppBody>
              <SideBar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`
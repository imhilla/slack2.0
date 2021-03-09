import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route } from "react-router-dom";
import './App.css';
import styled from 'styled-components';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Chat from './Components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './Components/Login';
// import Spinner from 'react-spinkit';


function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"
            alt=""
          />
          {/* <Spinner
            name="ball-spin-fade-loader"
            color="purple"
            fadein="none"
          /> */}
        </AppLoadingContents>
      </AppLoading>
    )
  }

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

const AppLoading = styled.div`
   display:grid;
   place-items:center;
   height: 100vh;
   width:100%;
`

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;

  >img {
     height:100px;
     padding:20px;
     margin-bottom: 40px;
  }
`
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './Demo';
import Register from './Register';
import Login from './Login';
import HCMDemo from './HCMDemo';
//import { Router, IndexRoute, Route, browserHistory } from 'react-router';
function App() {
  return (
   <div>
     <HCMDemo/>
     <h1> Hello World</h1>
     <Demo/>     
     <Login/>
     <Register/>
    
    </div>
    
  );
}

export default App;

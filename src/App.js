import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from "./components/Edit"
import Login from './components/Login';
import Protected from './components/Protected';


function App() {

  return (
    <Router>
      <Protected path="/" component={ Home } exact />
      <Route path="/add" component={ Add } />
      <Route path="/edit/:id" component={ Edit } />
      <Route path="/login" component={ Login } />
    </Router>
  )

}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from "./components/Edit"


function App() {

  return (
    <Router>
      <Route path="/" component={ Home } exact />
      <Route path="/add" component={ Add } />
      <Route path="/edit/:id" component={ Edit } />
    </Router>
  )

}

export default App;

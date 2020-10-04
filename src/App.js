import React from 'react';
import Menu from './components/Menu'
import Form from './components/Form'
import { BrowserRouter as Router , Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar"
import Board from "./components/Board"
import About from "./components/About"
import Calories from "./components/Calories"
import './App.css';

function App() {
  return (
    <div>
      
      <Form/>
      <Menu/>
      
      
    <Router>
      
      <Route exact path="/" components={Board}></Route>
      <Route path="/about" components={About}></Route>
      <Route path="/calories" components={Calories}></Route>
      <Route  path="/" components={Navbar}></Route>
      
      </Router>
    </div>
  );
}

export default App;

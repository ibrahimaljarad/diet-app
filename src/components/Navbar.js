
 import React, { Component} from "react"
import {Link} from 'react-router-dom';



function Navbar() {
    return (
     <>
     <div className="navbarContainer">
      <nav className= " navbar navbar-expend-sm  navbar-dark px-sm-5">
        <Link to ="/">
        <h2 className ="navbar-brand">Diet Manager</h2>
        </Link>
        <ul className =" navbar-nav align-item-center">
          <li className = " nav-item ml-5">
            <Link to="/about" className ="nav-link">
             About
            </Link>
          </li>
          </ul>
        <Link to="/calories" className =" ml-auto">
            <button className="buttonContainer">
              
              Calories
            </button>
          </Link>
      </nav>
      </div>
     </>
    );
  }
  
  export default Navbar;
  
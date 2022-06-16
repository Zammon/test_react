import React,{Component} from "react";
import { useState } from "react";
import './appstyle.css';

import {CSSTransition} from 'react-transition-group';

function App() {
  return (
    <Navbar> 
      <NavItem  icon="👨"/>
      <NavItem  icon="🧔"/>
        <NavItem  icon="👨‍🦳">
        {/*Dropdown goes here!*/}
        <DropdowMenu />
        </NavItem>
    </Navbar>
  );
}

function DropdowMenu() {

    function DropdownItem(props){
      return (
      <a href="#" className="menu-item">
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-button">{props.rightIcon}</span>
      </a>
      );
    }


    return(
      <div className="dropdown">
          <DropdownItem leftIcon={"🥵"}>
            My Profile
          </DropdownItem>
          <DropdownItem leftIcon={"🥵"} >

          </DropdownItem>
      </div>
    );
}

function Navbar(props){
  return (
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
      );
}

function NavItem(props) {
  
  const [open, setOpen] = useState(false);
  
  return (
  <li className="nav-item">
    <a href="#" className="icon-button" onClick={()=> setOpen(!open)}>
        {props.icon}
    </a>
    {open && props.children}
  </li>
  );
}

export default App;

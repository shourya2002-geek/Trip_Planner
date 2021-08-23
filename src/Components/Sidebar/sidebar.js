import React from "react";
import { slide as Menu } from "react-burger-menu";
import './sidebar.scss';


const Sidebar = () => {



  return (

    <Menu>
      
      <a className="menu-item" href="/">
        
        <span>ABOUT</span>
      </a>

      <a className="menu-item" href="/questions">
      
        <span>CONTACT</span>
      </a>

      <a className="menu-item" href="/medium">
      
        <span>PRICING</span>
      </a>

      <a className="menu-item" href="/contact">
      
        <span>ACCOUNT</span>
      </a>
    </Menu>
  );
};

export default Sidebar;
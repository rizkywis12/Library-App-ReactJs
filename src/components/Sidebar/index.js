import React, { useState } from 'react';
import {
    FaBars,
}from "react-icons/fa";

import '../../styles/components/Sidebar.css'
import Profile from '../Profile';
import SidebarLink from '../SidebarLink';
const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
   
    return (
        <div className="d-flex container-fluid">
           <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <div style={{marginLeft: isOpen ? "200px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
        <div style={{display: isOpen ? "block" : "none"}} className="content-side">
           <Profile/>
          <SidebarLink/>
      </div>
    </div>
           <main>{children}</main>
</div>
    );
};

export default Sidebar;
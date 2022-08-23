import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { useState } from 'react';




function Sidebar() {
  const [sidebarWidth, setSidebarWidth] = useState('0');
  const [mainMargin, setmainMargin] = useState('0');


  function openNav() {
    // console.log('open');
    // console.log(sidebarWidth);
    // document.getElementById("mySidebar").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
    setSidebarWidth('250px');
    setmainMargin('250px');

  }

  function closeNav() {
    // document.getElementById("mySidebar").style.width = "0";
    // document.getElementById("main").style.marginLeft= "0";
    setSidebarWidth('0');
    setmainMargin('0');
  }


  return (

    <>
      <div id="mySidebar" style={{ width: sidebarWidth }} className="sidebar">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/dashboard">Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/umabehera/reactstrap1">GitHub</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                Option 1
              </DropdownItem>
              <DropdownItem>
                Option 2
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Reset
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </div>

      <div id="main" style={{ marginLeft: mainMargin }}>
        <button className="openbtn" onClick={openNav}>☰ </button>
      </div>
    </>
  );
}
export default Sidebar;

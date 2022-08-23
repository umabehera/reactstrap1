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
import { Navigate,useNavigate } from 'react-router-dom';




function Navbar1() {
    let navigate=useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    function toggle() {
        setIsOpen(!isOpen);
    };
    const logout = () => {
        localStorage.setItem('isloggedin', '');
        localStorage.setItem('loginemail', '');
        navigate('/');

    }

    return (
        <div className='mynavbar'>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">eZi0's App</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Nav className="mr-auto" navbar>
                    <UncontrolledDropdown nav inNavbar >
                        <DropdownToggle nav caret>
                            <img src={require("./pic.png")} alt='logo' style={{ maxHeight: '41px' }} />

                        </DropdownToggle>
                        <DropdownMenu >
                            <DropdownItem>
                                Edit profile
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <a onClick={logout}>Logout</a>

                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Navbar>
        </div>
    );
}
export default Navbar1;
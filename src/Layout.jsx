import React from 'react';
import Sidebar from './SIdebar';
import Navbar1 from './Navbar1';

const Layout = (props)=>{
    return (
        <>
            <Navbar1 />
            <Sidebar />
            {props.children}
        </>
    );


}
export default Layout;
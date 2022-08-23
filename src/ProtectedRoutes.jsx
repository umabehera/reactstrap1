import { Outlet, Navigate } from "react-router-dom";
import Navbar1 from "./Navbar1";
import Sidebar from "./SIdebar";
import Layout from "./Layout";

const Protected = () => {
    let isLoggedIn = localStorage.getItem('isloggedin');
    // if (!isLoggedIn) {
    // return <Navigate to="/" replace />;
    // }
    // return children;
    return(
  
    isLoggedIn ?<Layout><Outlet /></Layout>  : <Navigate to='/' />
    )
};
export default Protected;
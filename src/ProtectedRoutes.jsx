import { Outlet, Navigate } from "react-router-dom";

const Protected = () => {
    let isLoggedIn = localStorage.getItem('isloggedin');
    // if (!isLoggedIn) {
    // return <Navigate to="/" replace />;
    // }
    // return children;
    return(
    isLoggedIn ? <Outlet /> : <Navigate to='/' />
    )
};
export default Protected;
// src/components/Navbar.js

import { Link } from "react-router-dom";
import { useContext } from "react";                      
import { AuthContext } from "../context/auth";  

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, logOutAdmin } = useContext(AuthContext);   // <== ADD

  
  //  Update the rendering logic to display different content 
  //  depending on the user being logged in or not
  return (
    <nav>
      <Link to="/">
        <img className="logo-nav" src="/images/logo_gelb.png" alt="Logo"/>
      </Link>

      {/*    UPDATE     */}
      {isLoggedIn && (
        <>
          {/* <Link to='/logout'>
            <img className="logout" src="/images/logout.png" alt="Logout"/>
          </Link> */}
          <button className="nav-link" onClick={logOutAdmin}>logout</button>    
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;

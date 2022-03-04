import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

export default function IsPrivate( { children } ) {
  
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  // If the authentication is still loading 
  if (isLoading) return <p>Loading ...</p>;

  if (!isLoggedIn) {
  // If the admin is not logged in 
    return <Navigate to="/login" />;
  } else {
  // If the admin is logged in, allow to see the page 
    return children;
  }
}


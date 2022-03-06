import { Link } from "react-router-dom";
import { useContext } from "react";                      
import { AuthContext } from "../context/auth";  

export default function EventNavbar (){

    return(
        <>
        <Link to='/Projects'>Projects</Link>
        <Link to='Volunteer'>Volunteer</Link>
        </>
    )
}
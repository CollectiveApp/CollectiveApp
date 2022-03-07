import { Link } from "react-router-dom";

export default function EventNavbar (){

    return(
        <>
        <Link to='/Projects'>Projects</Link>
        <Link to='/Events'>Events</Link>
        <Link to='Volunteer'>Volunteer</Link>
        </>
    )
}
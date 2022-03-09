import { Link } from "react-router-dom";

export default function EventNavbar (){

    return(
        <>
        <nav>
            <Link className="nav-link" to='/Projects'>Projects</Link>
            <Link className="nav-link" to='/Events'>Events</Link>
            <Link className="nav-link" to='/'>Home</Link>
        </nav>
        </>
    )
}
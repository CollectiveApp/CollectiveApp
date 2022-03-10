import { Link } from "react-router-dom";

export default function EventNavbar (){

    return(
        <>
        <nav>
            <Link className="nav-link" to='/Projects'>PROJECTS</Link>
            <Link className="nav-link" to='/Events'>EVENTS</Link>
            <Link className="nav-link" to='/'>HOME</Link>
        </nav>
        </>
    )
}
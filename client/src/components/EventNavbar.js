import { Link } from "react-router-dom";

export default function EventNavbar (){

    return(
        <>
        <nav>
            <Link className="nav-link" to='/Projects'>PROJECTS</Link>
            <Link to='/'><img className="logo-nav" src="/images/logo_gelb.png" alt="Logo"/></Link>
            <Link className="nav-link" to='/Events'>EVENTS</Link>
        </nav>
        </>
    )
}
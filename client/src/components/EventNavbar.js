import { Link } from "react-router-dom";

export default function EventNavbar (){

    return(
        <>
        <nav>
        <div>
            <Link to='/'><img className="logo-nav" src="/images/logo_gelb.png" alt="Logo"/></Link>
        </div>
        <div className="nav-links-container">
            <Link className="nav-link" to='/Projects'>PROJECTS</Link> 
            |
            <Link className="nav-link" to='/Events'>EVENTS</Link>
        </div>
        </nav>
        </>
    )
}
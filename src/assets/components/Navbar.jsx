import "./style.css"
import { Link, NavLink } from "react-router"

export default function Navbar() {
    return (
        <>
            <div className="header" id="">

                <Link className="logo" to='/'><h3>Logo</h3></Link>


                <ul className="nav">
                    <NavLink className="link" to='/'><li>Home</li></NavLink>

                    <NavLink className="link" to='/contact'><li>Contact</li></NavLink>
                    <NavLink className="link" to='/about'><li>About</li></NavLink>
                    <NavLink className="link" to='/login'><li>Login</li></NavLink>
                </ul>
            </div>
        </>
    )
}
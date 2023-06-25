import React from "react";
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <header>
                <div id='menu'>
                    <div className="navLogo">
                        <Link to='/' className='title'>SKHIZMA</Link>
                    </div>

                    <div className="nav">
                        <NavLink to='/'>Početna</NavLink>
                        <NavLink to='/about'>O Nama</NavLink>
                        <NavLink to='/news'>Vijesti</NavLink>
                        <NavLink to='/discography'>Diskografija</NavLink>
                        <NavLink to='/contact'>Kontakt</NavLink>
                    </div>
                </div>
        </header>
    )
}

export default NavBar;
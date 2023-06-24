import React from "react";
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <header>
            <Link to='/' className='title'>SKHIZMA</Link>
                <div className='menu'>
                    <NavLink to='/'>Početna</NavLink>
                    <NavLink to='/about'>O Nama</NavLink>
                    <NavLink to='/news'>Vijesti</NavLink>
                    <NavLink to='/discography'>Diskografija</NavLink>
                    <NavLink to='/contact'>Kontakt</NavLink>
                </div>
        </header>
    )
}

export default NavBar;
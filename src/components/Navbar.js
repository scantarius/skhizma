import React from "react";
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";
import {motion} from 'framer-motion';

function NavBar() {
    return (
        <>
        <nav id="menu">
            <div className="navLogo">
                <Link to='/' className='title'>SKHIZMA</Link>
            </div>

            <div className="nav">
                <NavLink to='/'>
                    <motion.div
                        whileTap={{y: "-100%", transition: "0.5s"}}>
                        Početna
                    </motion.div>
                </NavLink>

                <NavLink to='/about'>
                    <motion.div
                        whileTap={{y: "-100%", transition: "0.5s"}}>
                        O Nama
                    </motion.div>
                </NavLink>

                <NavLink to='/news'>
                    <motion.div
                        whileTap={{y: "-100%", transition: "0.5s"}}>
                        Vijesti
                    </motion.div>
                </NavLink>

                <NavLink to='/discography'>
                    <motion.div
                        whileTap={{y: "-100%", transition: "0.5s"}}>
                        Diskografija
                    </motion.div>
                </NavLink>

                <NavLink to='/contact'>
                    <motion.div
                        whileTap={{y: "-100%", transition: "0.5s"}}>
                        Kontakt
                    </motion.div>
                </NavLink>
            </div>
        </nav>
        </>
    )
}

export default NavBar;
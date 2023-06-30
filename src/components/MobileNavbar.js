import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {motion} from 'framer-motion';

// Navigation icons for mobile
import HomeIcon from '../pictures/mobile/homeIcon.png';
import HomeFill from '../pictures/mobile/homeFill.png';
import AboutIcon from '../pictures/mobile/aboutIcon.png';
import AboutFill from '../pictures/mobile/aboutFill.png';
import NewsIcon from '../pictures/mobile/newsIcon.png';
import NewsFill from '../pictures/mobile/newsFill.png';
import DiscographyIcon from '../pictures/mobile/discIcon.png';
import DiscographyFill from '../pictures/mobile/discFill.png';
import ContactIcon from '../pictures/mobile/contactIcon.png';
import ContactFill from '../pictures/mobile/contactFill.png';

function MobileNavbar() {

    const [Home, setHome] = useState(false);
    const toggleHome = () => {
        if(Home === false) return;
        setHome(!Home)
        setAbout(true)
        setNews(true)
        setDiscography(true)
        setContact(true)
    }
    const [About, setAbout] = useState(true);
    const toggleAbout = () => {
        if(About === false) return;
        setHome(true)
        setAbout(!About)
        setNews(true)
        setDiscography(true)
        setContact(true)
    }
    const [News, setNews] = useState(true);
    const toggleNews = () => {
        if(News === false) return;
        setHome(true)
        setAbout(true)
        setNews(!News)
        setDiscography(true)
        setContact(true)
    }

    const [Discography, setDiscography] = useState(true);
    const toggleDiscography = () => {
        if(Discography === false) return;
        setHome(true)
        setAbout(true)
        setNews(true)
        setDiscography(!Discography)
        setContact(true)
    }

    const [Contact, setContact] = useState(true);
    const toggleContact = () => {
        if(Contact === false) return;
        setHome(true)
        setAbout(true)
        setNews(true)
        setDiscography(true)
        setContact(!Contact)
    }

    return (
        <motion.div 
            id="mobileMenu"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}>

            <NavLink to='/'>
                <motion.img 
                    src={Home ? HomeIcon : HomeFill} 
                    alt='home-icon' 
                    whileTap={{y: "-100%", transition: "0.5s"}}
                    onTap={toggleHome}
                />
            </NavLink>

            <NavLink to='/about'>
                <motion.img 
                    src={About ? AboutIcon : AboutFill} 
                    alt='about-icon'
                    whileTap={{y: "-100%", transition: "0.5s"}}
                    onTap={toggleAbout}
                    />
            </NavLink>


            <NavLink to='/news'>
                <motion.img 
                    src={News ? NewsIcon : NewsFill} 
                    alt='news-icon' 
                    whileTap={{y: "-100%", transition: "0.5s"}}
                    onTap={toggleNews}                
                />
            </NavLink>

            <NavLink to='/discography'>
                <motion.img
                    src={Discography ? DiscographyIcon : DiscographyFill} 
                    alt='discography-icon' 
                    whileTap={{y: "-100%", transition: "0.5s"}}
                    onTap={toggleDiscography}
                />
            </NavLink>
            
            <NavLink to='/contact'>
                <motion.img 
                    src={Contact ? ContactIcon : ContactFill} 
                    alt='contact-icon' 
                    whileTap={{y: "-100%", transition: "0.5s"}}
                    onTap={toggleContact}
                />
            </NavLink>
        </motion.div>
    )
}

export default MobileNavbar;
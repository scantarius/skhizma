import React, {useState} from "react";
import {Link} from "react-router-dom";

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

    const [Home, setHome] = useState(true);
    const toggleHome = () => setHome(!Home);

    const [About, setAbout] = useState(true);
    const toggleAbout = () => setAbout(!About);

    const [News, setNews] = useState(true);
    const toggleNews = () => setNews(!News);

    const [Discography, setDiscography] = useState(true);
    const toggleDiscography = () => setDiscography(!Discography);

    const [Contact, setContact] = useState(true);
    const toggleContact = () => setContact(!Contact);
 
    return (
        <nav>
            <div id='mobileMenu'>
                    <Link to='/'>
                        <img src={Home ? HomeIcon : HomeFill} alt='home-icon' onMouseEnter={toggleHome}/>
                    </Link>
                    <Link to='/about'>
                        <img src={About ? AboutIcon : AboutFill} alt='about-icon' onClick={toggleAbout} />
                    </Link>
                    <Link to='/news'>
                        <img src={News ? NewsIcon : NewsFill} alt='about-icon' onClick={toggleNews} />
                    </Link>
                    <Link to='/discography'>
                        <img src={Discography ? DiscographyIcon : DiscographyFill} alt='about-icon' onClick={toggleDiscography} />
                    </Link>
                    <Link to='/contact'>
                        <img src={Contact ? ContactIcon : ContactFill} alt='about-icon' onClick={toggleContact} />
                    </Link>
            </div>
        </nav>
    )
}

export default MobileNavbar;
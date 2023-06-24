import React, {useState} from "react";
import NavBar from "../components/Navbar";
import './News.css';
import Gitarijada from '../pictures/news/gitarijada.png';
import JelenTop10 from '../pictures/news/jelenTop10.png';
import JelenMetak from '../pictures/news/jelenMetak.png';
import JelenRavnoteza from '../pictures/news/jelenRavnoteza.png';
import HighwayMetak from '../pictures/news/hwsMetak.png';
import HighwayRavnoteza from '../pictures/news/hwsRavnoteza.png';
import HighwayTop50 from '../pictures/news/hwsTop50.png';

function News() {

    const [hoverJelen, setJelen] = useState(false);
    const toggleJelen = () => setJelen(!hoverJelen);

    const [hoverHighway, setHighway] = useState(false);
    const toggleHighway = () => setHighway(!hoverHighway);

    const [hoverGitarijada, setGitarijada] = useState(false);
    const toggleGitarijada = () => setGitarijada(!hoverGitarijada);

    return (
        <>
        <NavBar />
            <section id="news">
                <div id="top10">
                    <a href='https://jelenmusicshow.com/zoster-ostaju-na-vrucem-tronu/' 
                        target="_blank" rel="noreferrer">
                        <img src={JelenTop10} alt="News"
                            onMouseEnter={toggleJelen} onMouseLeave={toggleJelen}>
                        </img>
                    </a>
                </div>
                
                <div id="gitarijada">
                    <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid026vxzNXweK3np2CBDCYXx1TpQjQ4RTvGBxYAQ1GEcghdd7bn6m3cAsPHwbg9G4jQol&id=303343613456512' 
                        target="_blank" rel="noreferrer">
                        <img src={Gitarijada} alt="News"
                            onMouseEnter={toggleGitarijada} onMouseLeave={toggleGitarijada}>
                        </img>
                    </a>
                </div>
            

                <div id="top50">
                    <a href='https://highwaystarmagazine.org/top-50-domacih-pesama-2022-godine/' 
                        target="_blank" rel="noreferrer">
                        <img src={HighwayTop50} alt="News"
                            onMouseEnter={toggleHighway} onMouseLeave={toggleHighway}>
                        </img>
                    </a>
                </div>

                <div id="hwsRavnoteza">
                    <a href='https://highwaystarmagazine.org/bend-skhizma-objavio-svoj-drugi-singl/' 
                        target="_blank" rel="noreferrer">
                        <img src={HighwayRavnoteza} alt="News"
                            onMouseEnter={toggleHighway} onMouseLeave={toggleHighway}>            
                        </img>
                    </a>
                </div>

                <div id="jelenRavnoteza">
                <a href='https://jelenmusicshow.com/bend-skhizma-objavio-drugi-singl/' 
                    target="_blank" rel="noreferrer">
                    <img src={JelenRavnoteza} alt="News"
                        onMouseEnter={toggleJelen} onMouseLeave={toggleJelen}>
                    </img>
                </a>
                </div>

                <div id="hwsMetak">
                <a href='https://highwaystarmagazine.org/mladi-bend-skhizma-iz-prijedora-objavio-svoj-prvi-singl/' 
                    target="_blank" rel="noreferrer">
                    <img src={HighwayMetak} alt="News"
                        onMouseEnter={toggleHighway} onMouseLeave={toggleHighway}>
                    </img>
                </a>
                </div>

                <div id="jelenMetak">
                <a href='https://jelenmusicshow.com/bend-skhizma-izdao-prvi-autorski-singl/' 
                    target="_blank" rel="noreferrer">
                    <img src={JelenMetak} alt="News"
                        onMouseEnter={toggleJelen} onMouseLeave={toggleJelen}>
                    </img>
                </a>
                </div>
            </section>

            <div id="info">
                <span className={hoverJelen ? 'active' : 'hidden'}>
                    Jelen Music Show
                </span>
                <span className={hoverGitarijada ? 'active' : 'hidden'}>
                    Banjalučka Gitarijada
                </span>
                <span className={hoverHighway ? 'active' : 'hidden'}>
                    Highway Star Magazine
                </span>
            </div>
    </>
    )
}

export default News;
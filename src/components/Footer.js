import React, {useState} from "react";
import YouTubeLogo from '../pictures/YouTube.svg';
import YouTubeLogoHover from '../pictures/YouTubeGold.svg';
import SpotifyLogo from '../pictures/Spotify.svg';
import SpotifyLogoHover from '../pictures/SpotifyGold.svg';
import SoundCloudLogo from '../pictures/SoundCloud.svg';
import SoundCloudLogoHover from '../pictures/SoundCloudGold.svg';
import iTunesLogo from '../pictures/iTunes.svg';
import iTunesLogoHover from '../pictures/iTunesGold.svg';
import BandcampLogo from '../pictures/BandcampLogo.svg';
import BandcampLogoHover from '../pictures/BandcampLogoGold.svg';


function NavBar() {
    const [YouTube, setYouTube] = useState(false);
    const [Spotify, setSpotify] = useState(false);
    const [SoundCloud, setSoundCloud] = useState(false);
    const [iTunes, setiTunes] = useState(false);
    const [Bandcamp, setBandcamp] = useState(false);

    return (
        <footer>
        <h2>Slušajte nas:</h2>
        <a href='https://www.youtube.com/@skhizmamusic' target="_blank" rel="noreferrer" onMouseOver={() => setYouTube(true)}
            onMouseOut={() => setYouTube(false)}>
            <img src={YouTube ? YouTubeLogo : YouTubeLogoHover} alt="Logo" />
        </a>

        <a href='https://open.spotify.com/artist/5FI88IRsJqY1MhMxwhz2YJ' target="_blank" rel="noreferrer" onMouseOver={() => setSpotify(true)}
            onMouseOut={() => setSpotify(false)}>
            <img src={Spotify ? SpotifyLogo : SpotifyLogoHover} alt="Logo" />
        </a>
        
        <a href='https://soundcloud.com/skhizmamusic' target="_blank" rel="noreferrer" onMouseOver={() => setSoundCloud(true)}
            onMouseOut={() => setSoundCloud(false)}>
            <img src={SoundCloud ? SoundCloudLogo : SoundCloudLogoHover} alt="Logo" />
        </a>

        <a href='https://music.apple.com/us/artist/skhizma/1649374645' target="_blank" rel="noreferrer" onMouseOver={() => setiTunes(true)}
            onMouseOut={() => setiTunes(false)}>
            <img src={iTunes ? iTunesLogo : iTunesLogoHover} alt="Logo" />
        </a>

        <a href='https://skhizmamusic.bandcamp.com' target="_blank" rel="noreferrer" onMouseOver={() => setBandcamp(true)}
            onMouseOut={() => setBandcamp(false)}>
            <img src={Bandcamp ? BandcampLogo : BandcampLogoHover} alt="Logo" />
        </a>
        </footer>
    )
}

export default NavBar;
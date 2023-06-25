import React from "react";
import NavBar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import './Discography.css';

function Discography() {
    return (
        <>
        <NavBar />
            <MobileNavbar />
                <div id="spotify">
                    <iframe
                        title='metak'
                        target="_blank"
                        src="https://open.spotify.com/embed/track/5blVWR0xz9mANGMidEYt40?utm_source=generator&theme=0"
                        width="60%"
                        height="352"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        allowFullScreen
                        loading="lazy">
                    </iframe>

                    <iframe
                        title='ravnoteza'
                        target="_blank"
                        src="https://open.spotify.com/embed/track/56gWFdpqmjVmdINjBbpaax?utm_source=generator&theme=0"
                        width="60%"
                        height="352"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        allowFullScreen
                        loading="lazy">
                    </iframe>
                </div>
                
                <h1 className="moreSoon">VIŠE USKORO!</h1>
        </>
    )
}

export default Discography;
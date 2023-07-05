import React from "react";
import "./Discography.css";
import { motion } from "framer-motion";

function Discography() {
  return (
    <>
      <motion.div
        id="spotify"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
      >
        <iframe
          title="metak"
          target="_blank"
          src="https://open.spotify.com/embed/track/5blVWR0xz9mANGMidEYt40?utm_source=generator&theme=0"
          width="60%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />

        <iframe
          title="ravnoteza"
          target="_blank"
          src="https://open.spotify.com/embed/track/56gWFdpqmjVmdINjBbpaax?utm_source=generator&theme=0"
          width="60%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </motion.div>

      <h1 className="moreSoon">VIŠE USKORO!</h1>
    </>
  );
}

export default Discography;

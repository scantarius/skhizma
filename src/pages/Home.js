import React from "react";
import "./Home.css";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Logo from "../pictures/LogoWhite.png";

function Home() {
  return (
    <>
      <motion.div
        id="main"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
      >
        <div className="about">
          <h2>
            Članovi benda navode da vole da eksperimentišu, da mnogi muzički
            pravci i bendovi utiču na njih, ali da ne žele mnogo žanrovski da se
            određuju. Svoj muzički stil bi opisali kao rock, metal i funk..
          </h2>
          <a
            className="readMore"
            href="https://jelenmusicshow.com/bend-skhizma-izdao-prvi-autorski-singl/"
            target="_blank"
            rel="noreferrer"
          >
            Pročitaj više:
          </a>
        </div>

        <div className="logo">
          <img className="logo" src={Logo} alt="Logo" />
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default Home;

import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import GroupPhoto from "../pictures/GroupPhoto.jpg";

function About() {
  return (
    <>
      <motion.div
        id="about"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
      >
        <div className="aboutWrapper">
          <img className="groupPhoto" src={GroupPhoto} alt="Logo" />
          <motion.h2
            initial={{ y: "50%" }}
            animate={{ y: "0%", duration: "2s" }}
            className="aboutDescription"
          >
            Skhizma - Autorski bend iz Prijedora koji je nastao 2021 godine.
            <br />
            Sastav čine:
            <br />
            Ivan Saničanin – bas
            <br />
            Dejan Mandić – bubanj
            <br />
            Djordje Vasić – gitara, vokal
            <br />
            <br />
            Sve izdate pjesme su snimljene u
            <a
              className="cirithUngol"
              href="https://www.facebook.com/cirithungolstudio"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Cirith Ungol Studio.{" "}
            </a>
            Volimo da eksperimentišemo, jer mnogi muzički pravci i bendovi utiču
            na nas. Svoj muzički stil bi opisali kao rock, metal i funk. “Težimo
            ka što skorijoj realizaciji albuma. Imamo još spremnog materijala
            kojeg ćemo početi snimati nadamo se ubrzo. Mi ćemo se truditi da to
            bude što bolje i nadamo se da će sve teći kako treba.” - izjavili
            smo za
            <a
              className="highwaystarMagazine"
              href="https://highwaystarmagazine.org"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Highwaystar Magazin.
            </a>
          </motion.h2>
        </div>
      </motion.div>
    </>
  );
}

export default About;

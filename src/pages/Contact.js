import React, { useRef } from "react";
import { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import FacebookLogo from "../pictures/FacebookLogo.svg";
import InstagramLogo from "../pictures/InstagramLogo.svg";
import FacebookGold from "../pictures/FacebookLogoGold.svg";
import InstagramGold from "../pictures/InstagramLogoGold.svg";
import TwoLines from "../pictures/TwoLines.svg";

function Contact() {
  const [Facebook, setFacebook] = useState(false);
  const [Instagram, setInstagram] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8qcajkj",
        "template_6v3e1wm",
        form.current,
        "RH_RtvP5d5GB0v-ys"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  function handleEnter(event) {
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }

  const [success, setSuccess] = useState(false);
  const toggleSuccessMessage = () => {
    setSuccess(!success);
    setTimeout(() => {
      setSuccess(success);
    }, 2000);
  };

  return (
    <>
      <motion.div
        id="social"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
      >
        <div className="socialMedia">
          <h1>Društvene Mreže</h1>
          <a
            href="https://www.facebook.com/skhizmamusic"
            target="_blank"
            rel="noreferrer"
            onMouseOver={() => setFacebook(true)}
            onMouseOut={() => setFacebook(false)}
          >
            <img src={Facebook ? FacebookLogo : FacebookGold} alt="Logo" />
          </a>
          <a
            href="https://www.instagram.com/skhizma_band/"
            target="_blank"
            rel="noreferrer"
            onMouseOver={() => setInstagram(true)}
            onMouseOut={() => setInstagram(false)}
          >
            <img src={Instagram ? InstagramLogo : InstagramGold} alt="Logo" />
          </a>
        </div>

        <div className="formInput">
          <form ref={form} onSubmit={sendEmail}>
            <label>Vaše ime</label>
            <input
              type="text"
              autoComplete="off"
              name="user_name"
              onKeyDown={handleEnter}
            />

            <label>Vaš mail</label>
            <input
              type="email"
              autoComplete="off"
              name="user_email"
              onKeyDown={handleEnter}
            />

            <label>Poruka</label>
            <textarea
              className="msgInput"
              type="text"
              autoComplete="off"
              name="message"
            />

            <input
              className="finish"
              type="submit"
              value="POŠALJI"
              onClick={toggleSuccessMessage}
            />
          </form>
        </div>
      </motion.div>

      <div id="successfullySent">
        <span className={success ? "approved" : "hidden"}>
          Email sucessfully sent!
        </span>
      </div>

      <img className="twoLines" src={TwoLines} alt="Logo" />
    </>
  );
}

export default Contact;

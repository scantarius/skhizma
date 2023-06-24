import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Logo from './pictures/LogoWhite.png';

function App() {
  return (
    <>
    <NavBar />
      <main>
        <div className='about'>
          <h2>Članovi benda navode da vole da eksperimentišu, da mnogi muzički pravci i bendovi utiču na njih, 
              ali da ne žele mnogo žanrovski da se određuju. Svoj muzički stil bi opisali kao rock, metal i funk..</h2>
              <a className='readMore' 
                  href='https://jelenmusicshow.com/bend-skhizma-izdao-prvi-autorski-singl/' 
                  target="_blank" rel="noreferrer">Pročitaj više:</a>
        </div>

        <div className='logo'>
          <img className='logo' src={Logo} alt="Logo" />
        </div>
      </main>
    <Footer />
    </>
  );
}

export default App;

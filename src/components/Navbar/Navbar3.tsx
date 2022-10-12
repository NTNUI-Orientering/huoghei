import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import logo from '../../assets/images/logo-ntnui-min.png';
import sweco from '../../assets/images/sweco_white-min.png';
import './Navbar3.less';

const Navbar3 = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [documentWidth, setDocumentWidth] = useState(1024);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  useEffect(() => {
    setDocumentWidth(window.innerWidth);
    const interval = setInterval(() => {
      setDocumentWidth(window.innerWidth);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const navigationCSS: React.CSSProperties = {
    display: documentWidth > 767 ? 'flex' : !hamburgerOpen ? 'none' : 'flex'
  };

  return (
    <>
      <div className="navigation">
        <div className="navigation-wrapper">
          <div className="menu" style={navigationCSS}>
            <Link to="/" className="element">
              Hjem
            </Link>
            <Link to="/innbydelse" className="element">
              Innbydelse
            </Link>
            <Link to="/pm" className="element">
              PM
            </Link>
            <Link to="/pamelding" className="element">
              Påmelding
            </Link>
            <Link to="/resultater" className="element">
              Resultater
            </Link>

            <div className="dropdown">
              <button className="drop-button" typeof="checkbox">
                Informasjon
                <i className="arrow-down" />
              </button>
              <div className="drop-content">
                <Link to="/snusk" className="element">
                  Snuskeløpet
                </Link>
                <Link to="/gamp" className="element">
                  Gampeløpet
                </Link>
                <Link to="/ungdom" className="element">
                  Parløp for ungdom
                </Link>
                <Link to="/veteran" className="element">
                  Veteranklasse
                </Link>
                <Link to="/gjertsenfaktor" className="element">
                  Gjertsenfaktoren
                </Link>

                <div className="drop-title">Første gang? </div>

                <Link to="/huskeliste" className="element">
                  Dette må du huske{' '}
                </Link>
                <Link to="/tips" className="element">
                  Tips og triks
                </Link>
                <Link to="/faq" className="element">
                  Spørsmål og svar
                </Link>
              </div>
            </div>
            <div className="dropdown">
              <button className="drop-button">
                Historisk
                <i className="arrow-down" />
              </button>
              <div className="drop-content">
                <Link to="/tidligere-resultater" className="element">
                  Tidligere resultater{' '}
                </Link>
                <Link to="/statistikk" className="element">
                  Statistikk
                </Link>
                <Link to="/opprinnelse" className="element">
                  Tidenes første Hu og Hei - 1960{' '}
                </Link>
                <Link to="/blodsvettetarer" className="element">
                  Blod, svette og tårer - 1965
                </Link>
                <Link to="/bynight" className="element">
                  Hu og Hei by Night - 2010{' '}
                </Link>
                <Link to="/svommefotter" className="element">
                  Hu og Hei med svømmeføtter
                </Link>
              </div>
            </div>
          </div>

          <div className="hamburger" onClick={toggleHamburger}>
            <Hamburger />
          </div>

          <div>
            <Link to="/" className="element-logo">
              <img alt="logo" src={logo} className="logo" />
            </Link>
            <a href="www.sweco.no" className="sweco-logo">
              <img alt="Sweco sponsor logo" src={sweco} className="logo" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar3;

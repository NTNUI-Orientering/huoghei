import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Hamburger } from './Hamburger';
import logo from '../../assets/images/logo-ntnui-min.png';
import sweco from '../../assets/images/sweco_white-min.png';
import { HH } from '../../CONSTS';
import './Navbar3.less';

const Navbar3 = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [dropDownInformationOpen, setDropDownInformationOpen] = useState(false);
  const [dropDownHistoryOpen, setDropDownHistoryOpen] = useState(false);
  const [documentWidth, setDocumentWidth] = useState(1024);

  const toggleHamburger = () => {
    if (hamburgerOpen) {
      closeDropdowns();
    }
    setHamburgerOpen(!hamburgerOpen);
  };

  const toggleInformationDropdown = () => {
    setDropDownInformationOpen(!dropDownInformationOpen);
  };

  const toggleHistoryDropdown = () => {
    setDropDownHistoryOpen(!dropDownHistoryOpen);
  };

  const closeDropdowns = () => {
    setDropDownInformationOpen(false);
    setDropDownHistoryOpen(false);
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
            <Link to={HH.publicPath + '/'} className="element" onClick={toggleHamburger}>
              Hjem
            </Link>
            <Link to={HH.publicPath + '/innbydelse'} className="element" onClick={toggleHamburger}>
              Innbydelse
            </Link>
            <Link to={HH.publicPath + '/pm'} className="element" onClick={toggleHamburger}>
              PM
            </Link>
            <Link to={HH.publicPath + '/pamelding'} className="element" onClick={toggleHamburger}>
              Påmelding
            </Link>
            <Link to={HH.publicPath + '/resultater'} className="element" onClick={toggleHamburger}>
              Resultater
            </Link>

            <div className={dropDownInformationOpen ? 'dropdown dropdown-open' : 'dropdown'}>
              <button className="drop-button" typeof="checkbox" onClick={toggleInformationDropdown}>
                Informasjon
                <i className={dropDownInformationOpen ? 'arrow-up' : 'arrow-down'} />
              </button>
              <div className="drop-content">
                <Link to={HH.publicPath + '/snusk'} className="element" onClick={toggleHamburger}>
                  Snuskeløpet
                </Link>
                <Link to={HH.publicPath + '/gamp'} className="element" onClick={toggleHamburger}>
                  Gampeløpet
                </Link>
                <Link to={HH.publicPath + '/ungdom'} className="element" onClick={toggleHamburger}>
                  Parløp for ungdom
                </Link>
                <Link to={HH.publicPath + '/veteran'} className="element" onClick={toggleHamburger}>
                  Veteranklasse
                </Link>
                <Link
                  to={HH.publicPath + '/gjertsenfaktor'}
                  className="element"
                  onClick={toggleHamburger}
                >
                  Gjertsenfaktoren
                </Link>

                <div className="drop-title">Første gang? </div>

                <Link
                  to={HH.publicPath + '/huskeliste'}
                  className="element"
                  onClick={toggleHamburger}
                >
                  Dette må du huske{' '}
                </Link>
                <Link to={HH.publicPath + '/tips'} className="element" onClick={toggleHamburger}>
                  Tips og triks
                </Link>
                <Link to={HH.publicPath + '/faq'} className="element" onClick={toggleHamburger}>
                  Spørsmål og svar
                </Link>
              </div>
            </div>
            <div className={dropDownHistoryOpen ? 'dropdown dropdown-open' : 'dropdown'}>
              <button className="drop-button" onClick={toggleHistoryDropdown}>
                Historisk
                <i className={dropDownHistoryOpen ? 'arrow-up' : 'arrow-down'} />
              </button>
              <div className="drop-content">
                <Link
                  to={HH.publicPath + '/tidligere-resultater'}
                  className="element"
                  onClick={toggleHamburger}
                >
                  Tidligere resultater{' '}
                </Link>
                <Link
                  to={HH.publicPath + '/statistikk'}
                  className="element"
                  onClick={toggleHamburger}
                >
                  Statistikk
                </Link>
                <Link
                  to={HH.publicPath + '/opprinnelse'}
                  className="element"
                  onClick={toggleHamburger}
                >
                  Tidenes første Hu og Hei - 1960{' '}
                </Link>
                <Link
                  to={HH.publicPath + '/blodsvettetarer'}
                  className="element"
                  onClick={toggleHamburger}
                >
                  Blod, svette og tårer - 1965
                </Link>
                <Link to={HH.publicPath + '/bynight'} className="element" onClick={toggleHamburger}>
                  Hu og Hei by Night - 2010{' '}
                </Link>
                <Link
                  to={HH.publicPath + '/svommefotter'}
                  className="element"
                  onClick={toggleHamburger}
                >
                  Hu og Hei med svømmeføtter
                </Link>
              </div>
            </div>
          </div>

          <div className="hamburger" onClick={toggleHamburger}>
            <Hamburger open={hamburgerOpen} />
          </div>

          <div>
            <Link to={HH.publicPath + '/'} className="element-logo" onClick={toggleHamburger}>
              <img alt="logo" src={logo} className="logo" />
            </Link>
            <a href="https://www.sweco.no" className="sweco-logo">
              <img
                alt="Sweco sponsor logo"
                src={sweco}
                className="logo"
                onClick={toggleHamburger}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar3;

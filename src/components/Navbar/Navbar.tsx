import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.less';
import logo from '../../assets/images/logo-ntnui-min.png';

const NavBar: FC = () => {
  return (
    <nav className="nav">
      <div id="nav-container" className="container">
        <Link to="/" className="element-logo">
          <img alt="logo" src={logo} className="logo" />
        </Link>
        <Link to="/test" className="element">
          TestSide
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
          <button className="drop-button">
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
            Informasjon
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

      <div className="ntnui-stripes">
        <div className="bar black" />
        <div className="bar green" />
        <div className="bar yellow" />
      </div>
    </nav>
  );
};

export default NavBar;

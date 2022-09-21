import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Navbar1.less';
import logo from '../../assets/images/logo-ntnui-min.png';


const Navbar1: FC = () => {

    return(
        <div className='nav-container'>
        <section className="top-nav">
            <div>
                <Link to="/" className="element-logo">
                    <img alt="logo" src={logo} className="logo" />
                </Link>
            </div>
            <input id="menu-toggle" type="checkbox" />
            
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>

            <ul className="menu">
                <li><Link to="/innbydelse" className="element">
                    Innbydelse
                </Link></li>
                <li> <Link to="/pm" className="element">
                    PM
                </Link></li>
                <li><Link to="/pamelding" className="element">
                    Påmelding
                </Link></li>
                <li><Link to="/resultater" className="element">
                    Resultater
                </Link></li>

                <li className="dropdown">
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
                </li>
            </ul>
        </section>
        </div>
    )
}

export default Navbar1;
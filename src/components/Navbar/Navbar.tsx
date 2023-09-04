import { useState } from 'react';
import './Navbar.less';
import React from 'react';
import { Link } from 'react-router-dom';
import { HH } from '../../CONSTS';
import logo from '../../assets/images/logo-ntnui-min.png';
import NavDropdown from './NavDropdown';
import useOutsideClickRef from '../../hooks/useOutsideClickRef';
import { HistoryDropdownOptions, InformationDropDownOptions } from './NavDropdownOptions';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const {
    ref: historyRef,
    isFocusOutside: isFocusOutsideHistory,
    setIsFocusOutside: setIsFocusOutsideHistory
  } = useOutsideClickRef();
  const {
    ref: informationRef,
    isFocusOutside: isFocusOutsideInformation,
    setIsFocusOutside: setIsFocusOutsideInformation
  } = useOutsideClickRef();

  const setNavExpandedFalse = () => {
    setIsNavExpanded(false);
  };

  return (
    <div className="navigation-wrapper">
      <nav className={isNavExpanded ? 'navigation expanded' : 'navigation'}>
        <Link to={HH.publicPath + '/'} className="element-logo" onClick={setNavExpandedFalse}>
          <img alt="logo" src={logo} className="logo" />
        </Link>

        <a href="/" className="huoghei-name">
          Hu & Hei!{' '}
        </a>

        <button
          className={isNavExpanded ? 'hamburger expanded' : 'hamburger'}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
          <ul className="nav-ul">
            <li>
              <Link to={HH.publicPath + '/'} className="link" onClick={setNavExpandedFalse}>
                Hjem
              </Link>
            </li>
            <li>
              <Link
                to={HH.publicPath + '/innbydelse'}
                className="link"
                onClick={setNavExpandedFalse}
              >
                Innbydelse
              </Link>
            </li>
            <li>
              <Link to={HH.publicPath + '/pm'} className="link" onClick={setNavExpandedFalse}>
                PM
              </Link>
            </li>
            <li>
              <Link
                to={HH.publicPath + '/pamelding'}
                className="link"
                onClick={setNavExpandedFalse}
              >
                Påmelding
              </Link>
            </li>
            <li>
              <Link
                to={HH.publicPath + '/resultater'}
                className="link"
                onClick={setNavExpandedFalse}
              >
                Resultater
              </Link>
            </li>
            <li>
              <NavDropdown
                name="Informasjon"
                options={InformationDropDownOptions}
                closeMenu={isFocusOutsideInformation}
                onClick={setNavExpandedFalse}
                updateIsFocusOutside={setIsFocusOutsideInformation}
                ref={informationRef}
              />
            </li>

            <li>
              <NavDropdown
                name="Historisk"
                options={HistoryDropdownOptions}
                closeMenu={isFocusOutsideHistory}
                onClick={setNavExpandedFalse}
                updateIsFocusOutside={setIsFocusOutsideHistory}
                ref={historyRef}
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

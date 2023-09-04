import React, { useState, useEffect, forwardRef, ForwardRefRenderFunction } from 'react';
import { Link } from 'react-router-dom';
import { HH } from '../../CONSTS';
import './NavDropdown.less';

export interface DropdownOption {
  path: string;
  name: string;
  isTextOnly?: boolean;
}

interface NavDropDownProps {
  name: string;
  options: DropdownOption[];
  closeMenu: boolean;
  onClick: () => void;
  updateIsFocusOutside: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavDropdown: ForwardRefRenderFunction<HTMLUListElement, NavDropDownProps> = (
  { name, options, closeMenu, onClick, updateIsFocusOutside },
  ref
) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    updateIsFocusOutside(false);
  };

  const handleClick = () => {
    setIsOpen(false);
    updateIsFocusOutside(true);
    onClick();
  };

  // Closes dropdown if navigation is no longer expanded
  useEffect(() => {
    if (closeMenu) setIsOpen(false);
  }, [closeMenu]);

  return (
    <div className="dropdown">
      <button className="drop-button link" typeof="checkbox" onClick={toggleOpen}>
        {name}
        <i className={isOpen ? 'arrow-up' : 'arrow-down'} />
      </button>

      {isOpen && (
        <ul className="drop-content" ref={ref}>
          {options.map((option) => (
            <li key={option.name}>
              {!option.isTextOnly ? (
                <Link to={HH.publicPath + option.path} className="link" onClick={handleClick}>
                  {option.name}
                </Link>
              ) : (
                <div className="drop-title">Første gang? </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default forwardRef(NavDropdown);

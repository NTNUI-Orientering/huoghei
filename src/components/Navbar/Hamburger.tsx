import React, { FC } from 'react';
import './Hamburger.less';

interface HamburgerI {
  open: boolean;
}

const Hamburger: FC<HamburgerI> = ({ open }) => {
  return (
    <>
      <div className={open ? 'hamburger hamburger-open' : 'hamburger'}>
        <input className="hamburger-button" type="checkbox" />
        <div>
          <span className="burger burger1" />
          <span className="burger burger2" />
          <span className="burger burger3" />
        </div>
      </div>
    </>
  );
};

export { Hamburger };

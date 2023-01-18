import React from 'react';
import './Hamburger.less';

const Hamburger = () => {
  return (
    <>
      <div className="hamburger">
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

export default Hamburger;

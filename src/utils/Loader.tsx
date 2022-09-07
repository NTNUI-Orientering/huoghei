import React from 'react';
import './Loader.less';

export default function Loader() {
  return (
    <div className="parent">
      <div className="container">
        <div className="block black"></div>
        <div className="block green"></div>
        <div className="block yellow"></div>
      </div>
    </div>
  );
}

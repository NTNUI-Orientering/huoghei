import React from 'react';
import './Loader.less';

interface LoaderI {
  marginTop?: string;
}

export default function Loader({ marginTop = 'sm' }: LoaderI) {
  return (
    <div className="parent">
      <div className={'container ' + marginTop}>
        <div className="block black"></div>
        <div className="block green"></div>
        <div className="block yellow"></div>
      </div>
    </div>
  );
}

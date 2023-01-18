import React from 'react';
import './Footer.less';

const Footer = () => {
  const quotes = [
    '"Hold skitpratet för er själv!" - C.G. Armfeldt, feltherre og høy beskytter',
    '"Jeg er ikke mann nok for dette." - Øyvind Enger, mus',
    '"Jeg har krampe i muskler jeg ikke visste jeg hadde engang." - Øystein Jaren Samuelsen, veik',
    '"Nu börjar det." - Tuomas Tervo ved passering 18 km',
    '"Bare løp du! Jeg skal opp igjen til Hytta." - Anders Kløvstad, tatt av krampa 100 meter etter passering 18 km'
  ];

  return (
    <footer>
      <div className="footer">
        <div className="quote">{quotes[Math.floor(Math.random() * 5)]}</div>
        <div className="info">{'<3 Webgruppa'}</div>
      </div>
    </footer>
  );
};

export default Footer;

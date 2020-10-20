import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <nav className="Footer">
      <p className="Footer__copyright">&copy; Evgeniya Olta 2020</p>
      <ul className="Footer__links">
        <li className="Footer__link">
          <a href='#a'>Главная</a>
        </li>
        <li className="Footer__link">
          <a href='#a'>Яндекс.Практикум</a>
        </li>
        <li className="Footer__link">
          <img src='' alt='github' />
        </li>
        <li className="Footer__link">
          <img src='' alt='facebook' />
        </li>
      </ul>
    </nav>
  )
};

export default Footer;
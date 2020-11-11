import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import facebook from '../../images/fb.svg';
import github from '../../images/git.svg';

function Footer(props) {
  return (
    <nav className="footer">
      <p className="footer__copyright">&copy; Supersite, Powered by News API</p>
      <ul className="footer__links">
        <div className="footer__link-lines"> 
          <li>
          <Link to="/" className="footer__link" onClick={props.mainPageChange}>Главная</Link>
          </li>
          <li>
            <a className="footer__link" href="https://www.facebook.com/yandex.praktikum">Яндекс.Практикум</a>
          </li>
        </div>
        <div className="footer__social-icons">
          <li>
            <img className="footer__social-icon" src={github} alt='github' href="https://github.com/EvgeniyaOlta/news-explorer-frontend" />
          </li>
          <li>
            <img className="footer__social-icon" src={facebook} alt='facebook' href="https://www.facebook.com/yandex.praktikum/"/>
          </li>
        </div>
      </ul>
    </nav>
  )
};

export default Footer;
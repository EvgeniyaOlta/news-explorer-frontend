import React from 'react';
import './InfoTooltip.css'

function InfoTooltip(props) {
  
  React.useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && props.isOpen) {
        props.closePopup();
      }
    });
  });

  function overClose(e) {
    if (e.target.classList.contains('info-tooltip')) {
      props.closePopup();
    }
  }
    return (
      <section className={`info-tooltip ${props.isOpen && 'info-tooltip_opened'}`} onClick={overClose}>  
        <div className="info-tooltip__container">  
          <button className="info-tooltip__close-button" type="button" onClick={props.closePopup}></button> 
          <p className="info-tooltip__text">Пользователь успешно зарегистрирован!</p>
          <button className="info-tooltip__link" onClick={props.openLogin}>Войти</button>
        </div> 
      </section> 
    );
  }

export default InfoTooltip

import React from 'react';
import './PopupWithForm.css'


function PopupWithForm(props) {

  React.useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && props.isOpen) {
        props.closePopup();
      }
    });
  });

  function overClose(e) {
    if (e.target.classList.contains('popup')) {
      props.closePopup();
    }
  }

  return (
    <section className={`popup ${props.isOpen && "popup_opened"}`} onClick={overClose} >  
      <form name={`${props.name}`} className={`popup__container popup__container_for-form popup__container_type_${props.name}`}  noValidate>  
        <button className="popup__close-button" type="button" onClick={props.closePopup}></button> 
        <p className="popup__title">{props.title}</p> 
        <fieldset className="popup__list"> 
          {props.children}
        </fieldset>
      </form> 
    </section> 
  );
}

export default PopupWithForm

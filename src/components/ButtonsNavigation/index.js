import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonsNavigation = () => {
  return (
    <div className="buttons-navigation-block">
      <ul className="buttons-navigation__list">
        <li className="buttons-navigation__item">
          <span className="item__icon">
            <FontAwesomeIcon icon={['fas', 'lightbulb']} />
          </span>
          <span className="item__description">Objetivos</span>
        </li>
        <li className="buttons-navigation__item">
          <span className="item__icon"><FontAwesomeIcon icon={['fas', 'briefcase']}/></span>
          <span className="item__description">Experiencia</span>
        </li>
        <li className="buttons-navigation__item">
          <span className="item__icon"><FontAwesomeIcon icon={['fas', 'wrench']}/></span>
          <span className="item__description">Habilidades</span>
        </li>
        <li className="buttons-navigation__item">
          <span className="item__icon"><FontAwesomeIcon icon={['fas', 'graduation-cap']}/></span>
          <span className="item__description">Formación</span>
        </li>
        <li className="buttons-navigation__item">
          <span className="item__icon"><FontAwesomeIcon icon={['fas', 'globe']}/></span>
          <span className="item__description">Idioma</span>
        </li>
        <li className="buttons-navigation__item">
          <span className="item__icon"><FontAwesomeIcon icon={['fas', 'hands-helping']}/></span>
          <span className="item__description">Voluntariados</span>
        </li>
        <li className="buttons-navigation__item">
          <span className="item__icon"><FontAwesomeIcon icon={['fas', 'info']}/></span>
          <span className="item__description">Extra</span>
        </li>
      </ul>
    </div>
  )
}

export default ButtonsNavigation;
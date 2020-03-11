import React from 'react';
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GeneralItem from './GeneralItem';
import ItemHeader from './ItemHeader';
import transformGeneralData from '../../services/transformGeneralData';
import './style.scss';
import imgReact from '../../images/iconos/react.png';
import imgAngular from '../../images/iconos/angular.png';
import imgJS from '../../images/iconos/js.png';
import imgSass from '../../images/iconos/sass.png';
import imgHtml5 from '../../images/iconos/html5.png';
import imgPHP from '../../images/iconos/php.png';
import imgMySql from '../../images/iconos/mysql.png';
import imgGithub from '../../images/iconos/github.png';

const generalItemBody = (data) => (
  data.map((element, index) => (
    <GeneralItem key={index}
      companyName={element.companyName}
      position={element.position}
      description={element.description}
      time={element.time}>
      {element.extra && extraInfo(element.extra)}
    </GeneralItem>
  ))
);

const extraInfo = (extraData) => (
  <div className="body__icons">
    {addElementsExtra(extraData)}
  </div>
);

const addElementsExtra = (extraData) => (
  extraData.map(({ description }, index) => {

    switch (description) {
      case 'react':
        return (
          <div key={index} className="icon">
            <img src={imgReact} className={`img img--${description}`} alt=""/>
          </div>
        )
      case 'angular':
        return (
          <div key={index} className="icon">
            <img src={imgAngular} className={`img img--${description}`} alt=""/>
          </div>
        )
      case 'js':
        return (
          <div key={index} className="icon">
            <img src={imgJS} className={`img img--${description}`} alt=""/>
          </div>
        )
      case 'sass':
        return (
          <div key={index} className="icon">
            <img src={imgSass} className={`img img--${description}`} alt=""/>
          </div>
        )
      case 'html5':
        return (
          <div key={index} className="icon">
            <img src={imgHtml5} className={`img img--${description}`} alt=""/>
          </div>
        )
      case 'php':
        return (
          <div key={index} className="icon">
            <img src={imgPHP} className={`img img--${description}`} alt=""/>
          </div>
        )
      case 'mysql':
        return (
          <div key={index} className="icon">
            <img src={imgMySql} className={`img img--${description}`} alt=""/>
          </div>
        )
      case 'github':
        return (
          <div key={index} className="icon">
            <img src={imgGithub} className={`img img--${description}`} alt=""/>
          </div>
        )
      default:
        break;
    }
  }
    
  )
);


const WorkExperience = ({ data, language }) => {
  const { title, icon , formatData } = transformGeneralData(data, language);
  
  return (
    <div className="card general__item extra-item">
      <ItemHeader title={title} icon={icon}></ItemHeader>
      {generalItemBody(formatData)}
    </div>
  );
}

WorkExperience.propTypes = {
  data: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
}
export default WorkExperience;
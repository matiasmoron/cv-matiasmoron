import React from 'react';
import PropTypes from 'prop-types';
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
import imgGit from '../../images/iconos/git.png';
import imgScrum from '../../images/iconos/scrum.png';
import imgMongodb from '../../images/iconos/mongodb.png';
import imgNodejs from '../../images/iconos/nodejs.png';
import imgGlobant from '../../images/companies/globant.jpg';
import imgDev from '../../images/companies/dev.png';
import imgCoope from '../../images/companies/coope.png';
import imgInmobiliaria from '../../images/companies/inmobiliaria.png';
import imgCoderhouse from '../../images/companies/coderhouse.png';

const generalItemBody = data => {
  const company = {
    globant: imgGlobant,
    coope: imgCoope,
    dev: imgDev,
    inmo: imgInmobiliaria,
    coderhouse: imgCoderhouse
  };

  return data.map((element, index) => (
    <GeneralItem
      key={index}
      companyName={element.companyName}
      position={element.position}
      description={element.description}
      time={element.time}
      icon={company[element.icon]}
    >
      {element.extra && extraInfo(element.extra)}
    </GeneralItem>
  ));
};

const extraInfo = extraData => <div className='body__icons'>{addElementsExtra(extraData)}</div>;

const addElementsExtra = extraData =>
  extraData.map(({ description, tooltip }, index) => {
    const tecno = {
      react: imgReact,
      angular: imgAngular,
      js: imgJS,
      sass: imgSass,
      html5: imgHtml5,
      php: imgPHP,
      mysql: imgMySql,
      github: imgGithub,
      git: imgGit,
      scrum: imgScrum,
      mongodb: imgMongodb,
      nodejs: imgNodejs,
    };

    return (
      <div key={index} className='icon'>
        <img src={tecno[description]} className={`img img--${description}`} alt={description} />
        <span className='icon__tooltip'>{tooltip}</span>
      </div>
    );
  });

const WorkExperience = ({ data, language }) => {
  const { title, icon, formatData } = transformGeneralData(data, language);

  return (
    <div className='card general__item extra-item'>
      <ItemHeader title={title} icon={icon}></ItemHeader>
      {generalItemBody(formatData)}
    </div>
  );
};

WorkExperience.propTypes = {
  data: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired
};

export default WorkExperience;

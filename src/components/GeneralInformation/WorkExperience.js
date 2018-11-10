import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GeneralItem from './GeneralItem';
import ItemHeader from './ItemHeader';
import transformGeneralData from '../../services/transformGeneralData';
import './style.scss';


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
  extraData.map(({description}, index) => (
    <span key={index} className={`icon icon--${description}`} title={description}>
      <FontAwesomeIcon icon={['fab', description]} />
    </span>
  ))
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
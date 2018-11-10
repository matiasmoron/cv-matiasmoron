import React from 'react';
import PropTypes from 'prop-types';
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
    </GeneralItem>
  ))
);

const Studies = ({ data, language }) => {
  const { title, icon , formatData } = transformGeneralData(data, language);
  
  return (
    <div className="card general__item">
      <ItemHeader title={title} icon={icon}></ItemHeader>
      {generalItemBody(formatData)}
    </div>
  );
}

Studies.propTypes = {
  data: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
}

export default Studies;
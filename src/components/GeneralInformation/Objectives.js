import React from 'react';
import PropTypes from 'prop-types';
import transformDataObjectives from '../../services/transformDataObjectives';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ItemHeader from './ItemHeader';


const renderObjectives = (data) => (
  data.map((objective,index) => (
    <div key={index} className="general-item__body general-item__body--objective text--left">
      <span className="objective--icon">
        <FontAwesomeIcon icon={['fas', 'dot-circle']} />
      </span>
      {objective}
    </div>
  ))
)

const Objectives = ({ data, language }) => {
  const { title, formatData, icon } = transformDataObjectives(data,language);
  return (
    <div className="card general__item">
      <ItemHeader title={title} icon={icon}></ItemHeader>
      {renderObjectives(formatData)}
    </div>
  );
}

Objectives.propTypes = {
  data: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
}

export default Objectives;
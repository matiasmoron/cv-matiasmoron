import React from 'react';
import PropTypes from 'prop-types';
import GeneralItem from './GeneralItem';
import ItemHeader from './ItemHeader';
import transformGeneralData from '../../services/transformGeneralData';
import './style.scss';
// import imgPenna from '../../images/companies/hospitalPenna.png';
// import imgOngPresente from '../../images/companies/ongPresente.jpg';

const generalItemBody = (data) => {

  return (
    data.map((element, index) => (
      <GeneralItem key={index}
        companyName={element.companyName}
        position={element.position}
        description={element.description}
        time={element.time}>
      </GeneralItem>
    ))
  );
}

const Volunteer = ({ data, language }) => {
  const { title, icon , formatData } = transformGeneralData(data, language);
  
  return (
    <div className="card general__item">
      <ItemHeader title={title} icon={icon}></ItemHeader>
      {generalItemBody(formatData)}
    </div>
  );
}

Volunteer.propTypes = {
  data: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
}

export default Volunteer;
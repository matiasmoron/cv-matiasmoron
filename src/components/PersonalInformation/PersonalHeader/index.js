import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const PersonalHeader = ({ name, occupation, picture }) => {
  return (
    <div className="personal-header-block">
      <img src={picture} className="hoverZoomLink" alt="foto-cv" border="0"></img>
      <div className="name-block">
        {name}
      </div>
      <div className="occupation-block">
        {occupation}
      </div>
    </div>
  )
};

PersonalHeader.propTypes = {
 name:PropTypes.string.isRequired,
 occupation:PropTypes.string.isRequired,
}

export default PersonalHeader;
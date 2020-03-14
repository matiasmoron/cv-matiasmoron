import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const PersonalHeader = ({ name, occupation, picture }) => {
  return (
    <div className='personal-header-block'>
      <div className='profile-card__container'>
        <div className='profile-card__image'></div>
      </div>
      <div className='name-block'>{name}</div>
      <div className='occupation-block'>{occupation}</div>
    </div>
  );
};

PersonalHeader.propTypes = {
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired
};

export default PersonalHeader;

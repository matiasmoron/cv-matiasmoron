import React from 'react';
import PropTypes from 'prop-types';
import Item from "./Item";
import './Item/style.scss';
import imgCel from '../../../images/cel.png';
import imgEmail from '../../../images/email.png';


const PersonalBody = ({ phone, email }) => {
  const href = `mailto:${email}`;

  return (
    <div className="personal-body-block">
      <Item title={email} icon={imgEmail} url={href}></Item>
      <Item title={phone} icon={imgCel}></Item>
    </div>
  );
};

PersonalBody.propTypes = {
  phone : PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

export default PersonalBody;
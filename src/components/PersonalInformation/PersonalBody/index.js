import React from 'react';
import PropTypes from 'prop-types';
import Item from "./Item";

import imgCel from '../../../images/cel.png';
import imgEmail from '../../../images/email.png';


const PersonalBody = ({ phone, email }) => {
  const href = `mailto:${email}`;

  return (
    <div className="personal-body-block">
      <div className="item-block">
        <div className="item-icon-block">
          <img src={imgEmail} alt="email"/>
        </div>
        <div>
          <a href={href} className="item-title">
            {email}
          </a>
        </div>
      </div>
      <Item title={phone} icon={imgCel}></Item>
    </div>
  );
};

PersonalBody.propTypes = {
  phone : PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

export default PersonalBody;
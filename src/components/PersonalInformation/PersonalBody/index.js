import React from 'react';
import PropTypes from 'prop-types';
import Item from "./Item";

import imgCel from '../../../images/cel.png';
import imgEmail from '../../../images/email.png';


const PersonalBody = ({ phone, email }) => {
  return (
    <div className="personal-body-block">
      <Item title={email} icon={imgEmail}></Item>
      <Item title={phone} icon={imgCel}></Item>
      {/* <Item title='/in/matias-moron-gonzalo/' icon={imgLinkedin}></Item> */}
      {/* <div>
        <Item icon={imgLinkedin} url="https://www.linkedin.com/in/matias-moron-gonzalo"></Item>
      </div> */}
    </div>
  );
};

PersonalBody.propTypes = {
  phone : PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

export default PersonalBody;
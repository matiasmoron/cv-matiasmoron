import React from 'react';
import PropTypes from 'prop-types';
import Item from "./Item";

import imgCel from '../../../images/cel.png';
import imgEmail from '../../../images/email.png';
import imgLinkedin from '../../../images/ln.png';


const PersonalBody = ({ degree, email }) => {
  return (
    <div className="personal-body-block">
      <Item title='matiasmoron00@gmail.com' icon={imgEmail}></Item>
      <Item title='+54 2920 554540' icon={imgCel}></Item>
      <Item title='/in/matias-moron-gonzalo/' icon={imgLinkedin}></Item>
    </div>
  );
};

PersonalBody.propTypes = {
  degree : PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export default PersonalBody;
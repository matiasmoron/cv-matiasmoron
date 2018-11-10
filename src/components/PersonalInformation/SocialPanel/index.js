import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const openNewTab = (url) => {
  window.open(url, '_blank');
}

const socialElement = (data) => (
  data.map((elem, index) => (
    <span key={index} className={`icon icon--${elem.description}`} onClick={() => openNewTab(elem.url)}>
      <FontAwesomeIcon icon={['fab', elem.description]} />
    </span>
  ))
)

const SocialPanel = ({data}) => {
  return (
    <div className="social-panel">
      {socialElement(data)}
    </div>
  );
}

SocialPanel.propTypes = {
  data:PropTypes.array.isRequired
};

export default SocialPanel;
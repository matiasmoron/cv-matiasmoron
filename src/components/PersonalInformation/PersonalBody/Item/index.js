import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './style.scss';

const Item = ({ title, additional,icon }) => {
  return (
    <div className="item-block">
      <div className="item-icon-block">
        <img src={icon}  alt="arg-flag" />
      </div>
      <div>
        <span className="item-title">
          {title}
        </span>
        {/* <span className="item-additional">
          {additional}
        </span> */}
      </div>
    </div>
  );
};

Item.propTypes = {
  title : PropTypes.string.isRequired,
  additional: PropTypes.string,
  icon: PropTypes.string.isRequired,
}
export default Item;
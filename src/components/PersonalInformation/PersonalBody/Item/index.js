import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Item = ({ title, icon, url }) => {
  return (
    <div className="item-block">
      <div className="item-icon-block">
        <img src={icon} alt={icon} />
      </div>
      <div>
        <span className="item-title">
          {title}
        </span>
      </div>
    </div>
  );
};

Item.propTypes = {
  title : PropTypes.string,
  icon: PropTypes.string.isRequired,
}
export default Item;
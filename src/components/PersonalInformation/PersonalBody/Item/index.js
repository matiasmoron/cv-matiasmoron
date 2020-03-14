import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

// const openUrl = (url) => {
//   console.log('open url', url);
//   window.open(url,'mywindow');
// }
const Item = ({ title, icon }) => {
  return (
    <div className="item-block">
      <div className="item-icon-block">
        <img src={icon}  alt="arg-flag" />
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
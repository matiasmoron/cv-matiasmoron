import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = ({ title, icon, action = () => { }}) => {
  return (
    <div className="item-block" onClick={ () => action()}>
      <div className="item-icon-block">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        {
          <span className="item-title">
            {title}
          </span>
        }
      </div>
      <div>
      </div>
    </div>
  );
};

Item.propTypes = {
  title : PropTypes.string,
  icon: PropTypes.array.isRequired,
}
export default Item;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import '../Item/style.scss';

const itemsToList = data => (
  data.map(({ type, level }, index) => (
    <div key={index}>
      <span className="item-title">
        {type}
      </span>
      <span className="item-additional">
        ({level})
      </span>
    </div>
  ))
);


const ItemPro = ({ title, data, icon }) => {
  return (
    <div className="item-block">
      <div className="item-icon-block">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        {itemsToList(data)}
      </div>
    </div>
  );
};

ItemPro.propTypes = {
  title : PropTypes.string.isRequired,
  additional : PropTypes.string,
}
export default ItemPro;
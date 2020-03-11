import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const GeneralItem = ({companyName,position,description,time,children}) => {
  return (
    <div className="general-item__body">
      <div className="header-block">
        <div className="title__item">
          <span className="title__body">
            {companyName}
          </span>
          <div className="title-time">
            <span className="title-time__year-start">{time.start}</span>
            <span className="title-time__year-end">{time.end}</span>
          </div>
        </div>
      </div>
      <div className="body__block">
        <div className="body__data">
          <div className="body__occupation">
            {position}
          </div>
          <div className="body__description">
            {description}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

GeneralItem.propTypes = {
  companyName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.object.isRequired,
}

export default GeneralItem;
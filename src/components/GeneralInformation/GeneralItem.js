import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const GeneralItem = ({ companyName, position, description, time, icon, certificate, classes, moreInfo, children }) => {
  const itemClasses = `general-item__body ${classes ? classes : ''}`;
  return (
    <div className={itemClasses}>
      <div className='header-block'>
        <div className='title__item'>
          {icon ? <img src={icon} className='general-item__img' alt={description} /> : null}
          <div>
            <span className='title__body'>{companyName}</span>
            <div className='title-time'>
              <span className='title-time__year-start'>{time.start}</span>
              <span className='title-time__year-end'>{time.end}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='body__block'>
        <div className='body__data'>
          <div className='body__occupation'>{position}</div>
          <div className='body__description'>{description}</div>
          {certificate ? (
            <div className='body__certificate no-print'>
              <a href={certificate} target='_blank'>
                {moreInfo.certificateBtn}
              </a>
            </div>
          ) : null}
        </div>
      </div>
      {children}
    </div>
  );
};

GeneralItem.propTypes = {
  companyName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.object.isRequired,
  certificate: PropTypes.string,
  moreInfo: PropTypes.object,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export default GeneralItem;

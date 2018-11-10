import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  OBJECTIVES,
  WORK,
  EDUCATION,
  LANGUAGES,
  VOLUNTEER
} from "../../../src/constants/generalItems";
import './style.scss';

const strToIcon = iconDesc => {
  switch (iconDesc) {
    case OBJECTIVES:
      return ['fas', 'lightbulb'];
    case WORK:
      return ['fas', 'briefcase'];
    case EDUCATION:
      return ['fas', 'graduation-cap'];
    case LANGUAGES:
      return ['fas', 'globe'];
    case VOLUNTEER:
      return ['fas', 'hands-helping'];
    default:
      break;
  }
}

const ItemHeader = ({ title, icon }) => {
  return (
    <div className="general-item__title">
      <FontAwesomeIcon icon={strToIcon(icon)} />
      <span className="title-description">{title}</span>
    </div>
  )
}

ItemHeader.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
export default ItemHeader;
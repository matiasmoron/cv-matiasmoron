import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ES_AR, EN_EN } from '../../constants/languagesTypes';
import flagArg from '../../images/flagArg.png';
import flagEng from '../../images/flagEng.jpg';
import './style.scss';

class PanelButtonsLanguages extends Component {

  constructor(props) {
    super();
  }
  
  render() {
    return (
      <div className="panel-buttons-languages no-print">
        <div className={`language-item ${this.props.language === ES_AR ? 'active': ''} `} onClick={() => this.props.handleClick(ES_AR)}>
          <img src={flagArg} className="language-flag" alt="arg-flag" />
        </div>
        <div className={`language-item ${this.props.language === EN_EN ? 'active': ''} `} onClick={() => this.props.handleClick(EN_EN)}>
          <img src={flagEng} className="language-flag" alt="eng-flag"/>
        </div>
      </div>
    );
  }
}

PanelButtonsLanguages.propTypes = {
  language: PropTypes.string.isRequired,
};

const mapStateToProps = ({language}) => ({ language });
export default connect(mapStateToProps,null)(PanelButtonsLanguages);
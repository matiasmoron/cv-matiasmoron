import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setLanguage } from '../actions';
import { connect } from 'react-redux';
import PanelButtonsLanguages from '../components/PanelButtonsLanguages';

class PanelButtonsLanguagesContainer extends Component {

  constructor() {
    super();
    this.state = {};
  }
  handleLanguagesClick = (language) => {
    this.props.setLanguage(language); 
  }

  render() {
    return (
      <PanelButtonsLanguages handleClick={this.handleLanguagesClick}></PanelButtonsLanguages>
    );
  }
}

PanelButtonsLanguagesContainer.propTypes = {
  setLanguage: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setLanguage: value => dispatch(setLanguage(value))
});

export default connect(null, mapDispatchToProps)(PanelButtonsLanguagesContainer);
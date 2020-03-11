import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PersonalInformation from '../components/PersonalInformation';

class PersonalInformationContainer extends Component {

  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    fetch('data/db.json').then(response => (
      response.json()
    )).then(({ personal }) => {
        this.setState({ personal })
      });
  }

  render() {
    return (
      this.props.language &&
      <PersonalInformation
        language={this.props.language}
        data={this.state.personal}>
      </PersonalInformation>
    );
  }
}

PersonalInformationContainer.propTypes = {
  language: PropTypes.string.isRequired,
};

const mapStateToProps = ({language}) => ({ language });

export default connect(mapStateToProps,null)(PersonalInformationContainer);
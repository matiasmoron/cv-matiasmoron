import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WorkExperience from "../components/GeneralInformation/WorkExperience";
import Languages from "../components/GeneralInformation/Languages";
import Studies from "../components/GeneralInformation/Studies";
import Volunteer from "../components/GeneralInformation/Volunteer";
import Objectives from "../components/GeneralInformation/Objectives";
import Loading from "../components/Loading";

class GeneralInformationContainer extends Component {

  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    fetch('data/db.json').then(response => (
      response.json()
    )).then(({generalInformation}) => {
      this.setState({generalInformation})
    });
  }

  renderComponent() {
    const {
      objectives,
      experience,
      education,
      languages,
      volunteer
    } = this.state.generalInformation;

    return (
      <div className="generalInformation-block">
        <Objectives data={objectives} language={this.props.language}></Objectives> 
        <WorkExperience data={experience} language={this.props.language}></WorkExperience>
        <Studies data={education} language={this.props.language}></Studies>
        <Languages data={languages} language={this.props.language}></Languages>
        <Volunteer data={volunteer} language={this.props.language}></Volunteer>
      </div>
    )
  }

  render() {
    return (
      this.state.generalInformation
        ? this.renderComponent()
        : <Loading></Loading>
    )
  }

}

GeneralInformationContainer.propTypes = {
  language: PropTypes.string.isRequired,
};

const mapStateToProps = ({language}) => ({ language });

export default connect(mapStateToProps,null)(GeneralInformationContainer);
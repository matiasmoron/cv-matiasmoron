import React, { Component } from 'react';
import PropTypes from 'prop-types';


import PersonalHeader from './PersonalHeader';
import PersonalBody from './PersonalBody';
import SocialPanel from './SocialPanel';

import transformPersonalData from '../../services/transformPersonalData';
import './styles.scss';
import Loading from '../Loading';

class PersonalInformation extends Component {

  constructor() {
    super();
    this.state = {}
  }

  renderBody() {
    const {
      name,
      occupation,
      email,
      degree,
      languages,
      socialConnections,
      picture,
    } = transformPersonalData(this.props.data, this.props.language);
    
    return (
      <div className="personal-block">
        <div className="card profile-card">
          <PersonalHeader
            name={name}
            occupation={occupation}
            picture={picture}>
          </PersonalHeader>
          <PersonalBody
            degree={degree}
            email={email}
            languages={languages}>
          </PersonalBody>
          <hr></hr>
          <SocialPanel data={socialConnections}></SocialPanel>
        </div>
      </div>
    )
  }

  render() {
    return (
      this.props.data
        ? this.renderBody()
        : <Loading></Loading>
    );
  }
}

PersonalInformation.propTypes = {
  language: PropTypes.string.isRequired,
  data:PropTypes.object
};
export default PersonalInformation;
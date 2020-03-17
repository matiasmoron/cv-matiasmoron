import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GeneralItem from './GeneralItem';
import ItemHeader from './ItemHeader';
import transformGeneralData from '../../services/transformGeneralData';
import './style.scss';

import imgUdemy from '../../images/companies/udemy.jpg';
import imgAcamica from '../../images/companies/acamica.jpg';
import imgUns from '../../images/companies/uns.jpg';
import imgUady from '../../images/companies/uady.jpg';

class Studies extends Component {
  constructor(props) {
    super();
    this.state = { showExtraData: false };
  }

  extraData = data => {
    const company = {
      udemy: imgUdemy,
      acamica: imgAcamica,
      uns: imgUns,
      uady: imgUady
    };

    const moreInfo = {
      certificateBtn :
      this.props.language === 'es_AR'
        ? 'Ver certificado'
        : 'Certificate'
    };

    return this.state.showExtraData
      ? data.map((element, index) => (
          <GeneralItem
            key={index}
            companyName={element.companyName}
            position={element.position}
            description={element.description}
            time={element.time}
            certificate={element.certificate}
            icon={company[element.icon]}
            moreInfo={moreInfo}
            classes='fade-in'
          ></GeneralItem>
        ))
      : null;
  };

  generalItemBody = data => {
    const company = {
      uns: imgUns,
      uady: imgUady
    };

    return data.map((element, index) => (
      <GeneralItem
        key={index}
        companyName={element.companyName}
        position={element.position}
        description={element.description}
        time={element.time}
        certificate={element.certificate}
        icon={company[element.icon]}
      ></GeneralItem>
    ));
  };

  buttonDescription() {
    return this.props.language === 'es_AR'
      ? this.state.showExtraData
        ? 'Ocultar'
        : 'Ver más'
      : this.state.showExtraData
      ? 'Hide'
      : 'Show more';
  }

  render() {
    const { title, icon, formatData } = transformGeneralData(
      {
        title: this.props.data.title,
        icon: this.props.data.icon,
        data: this.props.data.data.default
      },
      this.props.language
    );

    const extraData = transformGeneralData(
      {
        title: this.props.data.title,
        icon: this.props.data.icon,
        data: this.props.data.data.extra
      },
      this.props.language
    );

    return (
      <div className='card general__item'>
        <ItemHeader title={title} icon={icon}></ItemHeader>
        {this.generalItemBody(formatData)}
        {this.extraData(extraData.formatData)}
        <button className='extra-data__button no-print' onClick={() => this.setState({ showExtraData: !this.state.showExtraData })}>
          {this.buttonDescription()}
        </button>
      </div>
    );
  }
}

Studies.propTypes = {
  data: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired
};

export default Studies;

import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './style.scss';
import PanelButtonsLanguagesContainer from './containers/PanelButtonsLanguagesContainer';
import PersonalInformationContainer from "./containers/PersonalInformationContainer";
import GeneralInformationContainer from "./containers/GeneralInformationContainer";
import HtmlToPDF from "./components/HtmlToPDF";
// import ButtonsNavigation from "./components/ButtonsNavigation";
library.add(fas,fab,far)

class App extends Component {

  
  render() {
    return (
      <div  id="capture" className="cv-block">
        <PersonalInformationContainer></PersonalInformationContainer>
        <GeneralInformationContainer></GeneralInformationContainer>
        {/* <ButtonsNavigation></ButtonsNavigation> */}
        <PanelButtonsLanguagesContainer></PanelButtonsLanguagesContainer>
        <HtmlToPDF></HtmlToPDF>
      </div>
    );
  }
}


export default App;

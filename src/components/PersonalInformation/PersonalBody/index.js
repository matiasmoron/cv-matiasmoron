import React from 'react';
import PropTypes from 'prop-types';
import Item from "./Item";
import './Item/style.scss';

const PersonalBody = ({ phone, email }) => {

  return (
    <div className="personal-body-block">
      <Item title={email} icon={["fas","envelope"]} action={ () => openEmail(email)}></Item>
      <Item title={phone} icon={["fab","whatsapp"]} action={ () => openWhatsAppWeb(phone)}  ></Item>
    </div>
  );
};

const openWhatsAppWeb = (phone) => {
  const whatsappUrl = isAMobile()
  ? 'https://api.whatsapp.com/send?phone='
  : 'https://web.whatsapp.com/send?phone=';
  
  window.open(`${whatsappUrl}${phone}&text=Hola, me contacto por una propuesta laboral.`);
}

const openEmail = (email) => {
  const href = `mailto:${email}`;

  window.open(href);
}
 const isAMobile = () => {
  const isMobile = {
    Android() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows() {
      return (
        navigator.userAgent.match(/IEMobile/i) ||
        navigator.userAgent.match(/WPDesktop/i)
      );
    },
    any() {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  return Boolean(isMobile.any());
}

PersonalBody.propTypes = {
  phone : PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

export default PersonalBody;
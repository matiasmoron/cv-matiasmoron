import React from 'react';
import PropTypes from 'prop-types';
import Item from "./Item";
import ItemPro from "./ItemPro";


const PersonalBody = ({ degree, email, languages }) => {
  return (
    <div>
      <Item title={degree} icon={['fas', 'graduation-cap']}></Item>
      <Item title={email} icon={['fas', 'at']}></Item>
      <ItemPro title={email} data={languages} icon={['fas', 'globe']}></ItemPro>
    </div>
  );
};

PersonalBody.propTypes = {
  degree : PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
}

export default PersonalBody;
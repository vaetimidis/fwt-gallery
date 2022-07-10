import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
// import { Input } from 'fwt-internship-uikit';
import { Input } from 'fwt-internship-uikit';
// import { SearchStyle } from '#/styles/components/control/control-panel.style';

const Search = () => {
  const [value, setValue] = useState('nope');

  const onChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };
  return <Input isDarkTheme onChange={onChange} value={value} />;
};

export default Search;

// Search.propTypes = {
//   value: PropTypes.string
// };

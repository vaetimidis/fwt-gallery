import React from 'react';
import { PropTypes } from 'prop-types';
import { SearchStyle } from '#/styles/components/control/search.style';

const Search = (props) => {
  const { callback, value } = props;

  return <SearchStyle onChange={(e) => callback(e.target.value)} value={value} />;
};

export default Search;

Search.propTypes = {
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
};

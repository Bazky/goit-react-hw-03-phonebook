import React from 'react';
import propTypes from 'prop-types';

const Filter = ({ filter, onFilterChange }) => (
  <>
    <input
      type="text"
      name="filter"
      placeholder="Search contacts..."
      value={filter}
      onChange={onFilterChange}
    />
  </>
);
export default Filter;

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  onFilterChange: propTypes.func.isRequired,
};

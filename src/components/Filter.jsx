import React from 'react';
import propTypes from 'prop-types';

export const Filter = ({ filter, onFilterChange }) => (
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

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  onFilterChange: propTypes.func.isRequired,
};

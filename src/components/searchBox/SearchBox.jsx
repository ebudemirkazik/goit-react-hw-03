import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={e => onFilterChange(e.target.value)}
        placeholder="Type a name..."
      />
    </div>
  );
};

export default SearchBox;
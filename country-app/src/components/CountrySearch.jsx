import React, { useState } from 'react';

const CountrySearch = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search country"
        value={searchText}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default CountrySearch;

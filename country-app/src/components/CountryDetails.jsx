import React from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <img className='flag-img' src={country.flag} alt="Country Flag" />
      <p>Currency: {country.currencies[0]?.name+` (${country.currencies[0]?.symbol})`}</p>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default CountryDetails;

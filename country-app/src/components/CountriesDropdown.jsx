import React from "react";

const CountriesDropdown = ({ countries = [], handleSelect }) => {
  return (
    <select onChange={handleSelect}>
      <option value="">Select a country.. </option>
      {countries?.map((country, index) => (
        <option key={index} value={country.name}>
          {country.name}
        </option>
      ))}
    </select>
  );
};

export default CountriesDropdown;

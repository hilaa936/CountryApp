import React, { useEffect, useState } from "react";
import CountriesDropdown from "../components/CountriesDropdown";
import CountrySearch from "../components/CountrySearch";
import { Link } from "react-router-dom";
import AutocompleteDropdown from "../components/AutocompleteDropdown";
import {
  useCountries,
  useSearchCountries,
  fetchCountries,
} from "../services/CountryService";

const HomePage = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [countries, setCountries] = useState([]);
  //option 1 : useEffect fetcing countries
  useEffect(() => {
    const initialCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };

    initialCountries();
  }, []);
  // another option is to use this method instead of useEffect because i wanted to store the countries on caching
  // const { data: countries } = useCountries();

  const filteredCountries = useSearchCountries(searchText);

  const handleSelect = (event) => {
    const selectedCountry = countries.find(
      (country) => country.name === event.target.value
    );
    setSearchText(event.target.value);
    setSelectedCountry(selectedCountry);
  };

  return (
    <div className="page">
      <h1>Asia Country App</h1>
      {/* <AutocompleteDropdown
        options={countries?.map((c) => c.name)}
        onSelect={handleSelect}
      /> */}
      <CountriesDropdown countries={countries} handleSelect={handleSelect} />

      <input
        type="text"
        placeholder="Search country"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />

      {selectedCountry && (
        <div>
          <h1>Selected country</h1>
          <Link to={`/country-details/${selectedCountry.name}`}>
            <h2>{selectedCountry.name}</h2>
          </Link>
          <p>Capital: {selectedCountry.capital}</p>
          <img
            className="flag-img"
            src={selectedCountry.flag}
            alt="Country Flag"
          />
        </div>
      )}
      {(!countries || countries.length === 0) && (
        <p>error fetching countries </p>
      )}
      {!filteredCountries ? (
        <p>error fetching countries </p>
      ) : (
        filteredCountries.map((c, i) => (
          <div key={i}>
            <Link to={`/country-details/${c.name}`}>
              <h2>{c.name}</h2>
            </Link>
            <p>Capital: {c.capital}</p>
            <img className="flag-img" src={c.flag} alt="Country Flag" />
          </div>
        ))
      )}
    </div>
  );
};

export default HomePage;

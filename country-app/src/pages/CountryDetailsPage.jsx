import React, { useEffect, useState } from "react";
import CountryDetails from "../components/CountryDetails";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useGetCountryByName } from "../services/CountryService";

const CountryDetailsPage = () => {
  const { name } = useParams();
  const country = useGetCountryByName(name);

  return (
    <div className="page">
      {country ? (
        <CountryDetails country={country} />
      ) : (
        <p> cant find country {name}</p>
      )}
    </div>
  );
};

export default CountryDetailsPage;

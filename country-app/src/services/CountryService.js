import axios from "axios";
import { useQuery } from "react-query";
import { queryClient } from "../queryClient";

const API_URL = "http://localhost:5077/api/country";

export const fetchCountries = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};

export const useCountries = () => {
  return useQuery("countries", fetchCountries, {
    retry: 3, // Maximum number of retries
    retryDelay: 10000, // Delay between retries in milliseconds (e.g., 1000ms = 1 second)
  });
};

export const useGetCountryByName = (countryName) => {
  const { data: countries } = useCountries();

  if (!countries) {
    return null;
  }

  const country = countries.find(
    (country) => country.name.toLowerCase() === countryName.toLowerCase()
  );

  return country;
};
export const useSearchCountries = (searchText) => {
  const { data: countries, isLoading } = useCountries();

  if (!searchText || searchText.toString().trim() === "") {
    return countries || [];
  }

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return filteredCountries;
};

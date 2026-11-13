import { useState, useEffect } from "react";
import type { Country } from "../types/Country";

interface CountriesApiResponse {
  data: {
    objects: Country[];
  };
}

function useCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCountries() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://api.restcountries.com/countries/v5?limit=100",
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_COUNTRIES_API_KEY}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }

        const result: CountriesApiResponse = await response.json();

        setCountries(result.data.objects);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  return {
    countries,
    loading,
    error,
  };
}

export default useCountries;

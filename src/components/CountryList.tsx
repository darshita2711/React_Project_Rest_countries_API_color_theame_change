
import type { Country } from "../types/Country";
import CountryCard from "./CountryCard";

interface CountryListProps {
  countries: Country[];
}

function CountryList({ countries }: CountryListProps) {
  if (countries.length === 0) {
    return <p className="no-results">No countries found.</p>;
  }

  return (
    <div className="country-grid">
      {countries.map((country) => (
        <CountryCard
          key={country.codes.alpha_3}
          country={country}
        />
      ))}
    </div>
  );
}

export default CountryList;

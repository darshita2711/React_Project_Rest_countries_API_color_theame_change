import type { Country } from "../types/Country";
import { Link } from "react-router-dom";

interface CountryCardProps {
  country: Country;
}

function CountryCard({ country }: CountryCardProps) {
  return (
    
     <Link
      to={`/country/${country.codes.alpha_3}`}
      className="country-link"
    >


    <article className="country-card">
      <div className="country-flag">
        {country.flag?.emoji || "🏳️"}
      </div>

      <div className="country-info">
        <h2>{country.names.common}</h2>

        <p>
          <strong>Population:</strong>{" "}
          {country.population.toLocaleString()}
        </p>

        <p>
          <strong>Region:</strong> {country.region}
        </p>

        <p>
          <strong>Subregion:</strong>{" "}
          {country.subregion || "N/A"}
        </p>
      </div>
    </article>
    </Link>
  );
}

export default CountryCard;
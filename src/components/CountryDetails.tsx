
import { useParams, Link } from "react-router-dom";
import useCountries from "../hooks/useCountries";

function CountryDetails() {
  const { code } = useParams();
  const { countries, loading, error } = useCountries();

  if (loading) {
    return <p>Loading country details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const country = countries.find(
    (item) => item.codes.alpha_3 === code
  );

  if (!country) {
    return <p>Country not found.</p>;
  }

  return (
    <main className="details-container">
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>

      <h1>{country.names.common}</h1>

      <div className="details-info">
        <p>
          <strong>Official Name:</strong>{" "}
          {country.names.official}
        </p>

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

        <p>
          <strong>Capital:</strong>{" "}
          {country.capitals?.map((capital) => capital.name).join(", ") || "N/A"}
        </p>
      </div>
    </main>
  );
}

export default CountryDetails;

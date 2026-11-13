
import { Link, useParams } from "react-router-dom";
import useCountries from "../hooks/useCountries";

function CountryDetails() {
  const { code } = useParams();

  const { countries, loading, error } = useCountries();

  // Show loading message while countries are being fetched
  if (loading) {
    return (
      <main className="details-container">
        <p>Loading country details...</p>
      </main>
    );
  }

  // Show error if API request fails
  if (error) {
    return (
      <main className="details-container">
        <p>Error: {error}</p>
      </main>
    );
  }

  // Find the selected country using its country code
  const country = countries.find(
    (item) => item.codes.alpha_3 === code
  );

  // Show message if country is not found
  if (!country) {
    return (
      <main className="details-container">
        <Link to="/" className="back-button">
          ← Back
        </Link>

        <p>Country not found.</p>
      </main>
    );
  }

  return (
    <main className="details-container">

      <Link to="/" className="back-button">
        ← Back
      </Link>

      <div className="country-details">

        {/* Country flag */}
        <div className="details-flag">
          {country.flag?.emoji || "🏳️"}
        </div>

        {/* Country information */}
        <div className="details-content">

          <h1>{country.names.common}</h1>

          <div className="details-grid">

            <div>
              <p>
                <strong>Official Name:</strong>{" "}
                {country.names.official}
              </p>

              <p>
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>

              <p>
                <strong>Region:</strong>{" "}
                {country.region}
              </p>

              <p>
                <strong>Subregion:</strong>{" "}
                {country.subregion || "N/A"}
              </p>
            </div>

            <div>
              <p>
                <strong>Country Code:</strong>{" "}
                {country.codes.alpha_3}
              </p>

              <p>
                <strong>Capital:</strong>{" "}
                {country.capitals?.map((capital) => capital.name).join(", ") || "N/A"}
              </p>

              <p>
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>
            </div>

          </div>

        </div>
      </div>

    </main>
  );
}

export default CountryDetails;

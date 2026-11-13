
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import CountryList from "../components/CountryList";
import useCountries from "../hooks/useCountries";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const { countries, loading, error } = useCountries();

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.names.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesRegion =
      selectedRegion === "" || country.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <main className="main-container">
      <div className="filter-section">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <RegionFilter
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
        />
      </div>

      {loading && <p>Loading countries...</p>}

      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <>
          <p className="debug-text">
            Showing {filteredCountries.length} of {countries.length} countries.
          </p>

          <CountryList countries={filteredCountries} />
        </>
      )}
    </main>
  );
}

export default HomePage;

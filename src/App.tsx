import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import RegionFilter from './components/RegionFilter';
import useCountries from './hooks/useCountries';

function App() {
  // searchTerm stores the current search text.
  //  selectedRegion stores the currently selected region from the dropdown.
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const { countries, loading, error } = useCountries();

  return (
    <>
    <Navbar />
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
          <p className="debug-text">
            Successfully loaded {countries.length} countries!
          </p>
        )}
      </main>
    </>
  )
}

export default App

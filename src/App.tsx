import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import RegionFilter from './components/RegionFilter';

function App() {
  // searchTerm stores the current search text.
  //  selectedRegion stores the currently selected region from the dropdown.
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
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

        <p className="debug-text">
          Search: {searchTerm || "Nothing entered"}
        </p>

        <p className="debug-text">
          Region: {selectedRegion || "All Regions"}
        </p>

      </main>
    </>
  )
}

export default App

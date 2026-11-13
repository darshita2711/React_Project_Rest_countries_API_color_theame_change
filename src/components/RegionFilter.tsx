
interface RegionFilterProps {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

function RegionFilter({
  selectedRegion,
  onRegionChange,
}: RegionFilterProps) {

  return (
    <div className="filter-container">

      <select
        value={selectedRegion}
        onChange={(event) =>
          onRegionChange(event.target.value)
        }
        aria-label="Filter by region"
      >
        <option value="">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

    </div>
  );
}

export default RegionFilter;

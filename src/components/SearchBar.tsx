interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
      <div className="search-container">

      <span className="search-icon">⌕</span>

      <input
        type="search"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
        aria-label="Search for a country"
      />
    </div>
  );
}

export default SearchBar;
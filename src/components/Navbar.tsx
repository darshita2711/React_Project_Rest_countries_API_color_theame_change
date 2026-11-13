
interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

function Navbar({ isDarkMode, onToggleTheme }: NavbarProps) {
  return (
    <nav className="navbar">
      <h1>Where in the world?</h1>

      <button
        className="theme-button"
        onClick={onToggleTheme}
        aria-label="Toggle color theme"
      >
        {isDarkMode ? "☀ Light Mode" : "☾ Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;

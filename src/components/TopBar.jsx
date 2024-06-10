function TopBar({ onSearch, isDark }) {
  const cities = [
    { id: 1, cityName: "Indore" },
    { id: 3, cityName: "Bhopal" },
    { id: 2, cityName: "Khargone" },
    { id: 4, cityName: "New Delhi" },
    { id: 5, cityName: "Mumbai" },
  ];
  return (
    <nav className="flex items-center justify-around max-sm:justify-center max-sm:gap-3">
      {cities.map((city) => (
        <button
          className={`text-lg max-sm:text-sm font-semibold  p-1.5 rounded-md transition ease-in cursor-pointer ${
            isDark
              ? "text-white hover:bg-slate-400/50"
              : "text-black hover:bg-gray-700/50"
          }`}
          key={city.id}
          onClick={() => onSearch(city.cityName)}
        >
          {city.cityName}
        </button>
      ))}
    </nav>
  );
}

export default TopBar;

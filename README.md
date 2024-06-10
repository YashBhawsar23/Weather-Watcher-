# Weather-App

## Description

The weather app provides users with up-to-date weather information, including the current weather conditions, a 3-hour step forecast, and a 5-day forecast. Users can easily switch between Celsius and Fahrenheit temperature units to suit their preferences. Additionally, the app features a theme toggle option, allowing users to switch between light and dark themes for optimal viewing comfort.

## Technologies Used

- **React:** We utilize React for building a dynamic and interactive user interface, allowing for efficient data rendering and seamless updates.
- **Vite:** Vite is employed as the build tool for its fast development server and hot module replacement, enabling rapid iteration during development.
- **Tailwind CSS:** We use Tailwind CSS for styling the app, leveraging its utility-first approach to quickly create sleek and modern designs.
- **OpenWeatherMap API:** We leverage the OpenWeatherMap API to fetch weather data, including current conditions and forecasts, ensuring reliable and accurate weather information. Temperature unit conversion is handled through the API by specifying the appropriate "units" parameter value ("metric" for Celsius and "imperial" for Fahrenheit), streamlining the implementation process.

## Known Issues or Limitations

- **Default Location:** When the weather app first loads, it defaults to showing the weather for "Khargone" town. This is because without user permission to access their current location, the app cannot automatically display the weather for their current location. While efforts are made to enhance user experience, this limitation may affect users who expect weather information for their current location upon first use.

import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 35,
    tempMin: 30,
    tempMax: 40,
    humidity: 60,
    windSpeed: 10,
    pressure: 1012,
    visibility: 10,
    weather: "Sunny",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  // ✅ Styles
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#e3f2fd", // light blue background
    padding: "20px",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "500px",
    background: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    padding: "25px",
    textAlign: "center",
  };

  const headingStyle = {
    color: "#1976d2",
    marginBottom: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Weather App by PK</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
    </div>
  );
}

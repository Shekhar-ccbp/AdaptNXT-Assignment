import './WeatherDisplay.css'

function WeatherDisplay({weatherData}) {
  const {location, current} = weatherData
  return (
    <div className="WeatherDisplay">
      <h2>
        Weather in {location.name}, {location.country}
      </h2>
      <p>Temperature: {current.temperature}°C</p>
      <p>Condition: {current.weather_descriptions[0]}</p>
      <p>Wind Speed: {current.wind_speed} km/h</p>
      <p>Humidity: {current.humidity}%</p>
    </div>
  )
}

export default WeatherDisplay

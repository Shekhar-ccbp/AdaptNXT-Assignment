import {useState} from 'react'
import CitySearch from './components/CitySearch'
import WeatherDisplay from './components/WeatherDisplay'
import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState(null)

  return (
    <div className="App">
      <CitySearch setWeatherData={setWeatherData} />
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  )
}

export default App

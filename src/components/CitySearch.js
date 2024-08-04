import {useState} from 'react'
import axios from 'axios'
import './CitySearch.css'

function CitySearch({setWeatherData}) {
  const [city, setCity] = useState('')

  /*  const fetchWeatherData = async () => {
    console.log(city)
    try {
      const response = await axios.get(
        `http://localhost:5000/api/weather/city?city=${city}`,
      )
      setWeatherData(response.data)
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  } */

  const getWeatherByCity = async (req, res) => {
    console.log(city)
    try {
      const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=${city}`,
      )
      res.json(response.data)
    } catch (error) {
      console.error(
        'Error fetching weather data:',
        error.response ? error.response.data : error.message,
      )
      res.status(500).json({error: 'Error fetching weather data'})
    }
  }

  const fetchWeatherByLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async position => {
        const {latitude, longitude} = position.coords
        try {
          const response = await axios.get(
            `http://localhost:5000/api/weather/coordinates?lat=${latitude}&lon=${longitude}`,
          )
          setWeatherData(response.data)
        } catch (error) {
          console.error('Error fetching weather data:', error)
        }
      })
    } else {
      // alert('Geolocation is not supported by this browser.')
    }
  }

  return (
    <div className="CitySearch">
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={getWeatherByCity} type="button">
        Get Weather
      </button>
      <button onClick={fetchWeatherByLocation} type="button">
        Use My Location
      </button>
    </div>
  )
}

export default CitySearch

const axios = require('axios')

const apiKey = process.env.API_KEY
console.log(apiKey)

const getWeatherByCity = async (req, res) => {
  const {city} = req.query

  try {
    const response = await axios.get(
      `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`,
    )
    res.json(response.data)
  } catch (error) {
    res.status(500).json({error: 'Error fetching weather data'})
  }
}

const getWeatherByCoordinates = async (req, res) => {
  const {lat, lon} = req.query

  try {
    const response = await axios.get(
      `http://api.weatherstack.com/current?access_key=${apiKey}&query=${lat},${lon}`,
    )
    res.json(response.data)
  } catch (error) {
    res.status(500).json({error: 'Error fetching weather data'})
  }
}

module.exports = {getWeatherByCity, getWeatherByCoordinates}

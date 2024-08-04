require('dotenv').config()

const express = require('express')

const cors = require('cors')

const weatherRoutes = require('./routes/weatherRoutes')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api/weather', weatherRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

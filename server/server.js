const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


const { getHouses, deleteHouse, createHouse, updateHouse } = require('../controller/ctrl')

app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id', deleteHouse)

const PORT = 4004
app.listen(PORT, ()=> console.log('Server listening on port 4004'))
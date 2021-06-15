const express = require('express')
const app = express();
const cors = require('cors')
const ctrl = require('./controller.js') //needs to be ./ to call file controller.js

const { getHouses, deleteHouse, createHouse, updateHouse } = ctrl

app.use(express.json());
app.use(cors());

app.get('/api/houses', getHouses)
app.delete('/api/houses/:id', deleteHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)

serverPort = 4005;
app.listen(serverPort, function(){
    console.log(`Server is running on ${serverPort}`)
})
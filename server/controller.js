const houses = require('./db.json') //auto fills with json file when using house
let globalId = 4;

module.exports = {
    getHouses: (req, res) => res.status(200).send(houses), //can be houses
    deleteHouse: (req, res) => {
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index, 1)//cuts out index given and what 
        res.status(200).send(houses)    
        //keep terms consistent
    }, //finds index of element given
    createHouse: (req, res) => {
        let { address, price, imageURL } = req.body
        let newHouse = {
            id: globalId,
            address,
            price,
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++;
    },
    updateHouse: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = houses.findIndex(elem => +elem.id === +id)

        if ( type === 'plus' ) {
            houses[index].price += 10000
            res.status(200).send(houses);
        } else if ( type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses);
        }
// account for negative
    }
}

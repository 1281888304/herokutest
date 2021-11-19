const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

// replace this string with your full name
const name = "Qinghang Zhang"

console.log(`My name is ${name}`)

// use this list as your temporary database!
// note that it will reset every time you restart your server
const myPokemon = [{
    id: "fc10b559-872c-43cd-bad2-f02e2e0a2d58", name: "Pikachu", health: 10, level: 1
}];


router.get('/', function (req, res) {
    // return all pokemon
    res.send({ myPokemon });
});

function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

router.post('/', (req, res) => {
    // if the pokemon name already exists in the list, return an error
    // randomly generate an id using UUID ["uuid()"]
    // randomly generate a level between 1 and 10, inclusive, if none is given
    // randomly generate a health between 10 and 100, inclusive, if none is given
    // insert your pokemon into the myPokemon list
    // return a 200
    const body = req.body;
    const { name } = body;
    let tempID = create_UUID();
    let level = Math.floor(Math.random() * 11);
    let health = Math.floor(Math.random() * 100);
    for (let pokemon of myPokemon) {
        if (pokemon.name === name) {
            console.log("logged err");
            res.status(404);
            res.send("Not Success");
        }
    }
    myPokemon.push({
        id: tempID,
        name: name,
        health: health,
        level: level
    })
    res.send("Done operation");

});

router.get('/:pokemonId', function (req, res) {
    // return pokemon if one is found matching the pokemonId
    // return a 404 if no pokemon matches that pokemonId
    const pokemonQuery = req.params.pokemonId;
    for (let pokemon of myPokemon) {
        if (pokemon.id === pokemonQuery) {

            res.send(pokemon);
            res.send("Found");
        }
    }
    res.status(404);
    res.send("Not Success");

});

router.put('/:pokemonId', function (req, res) {
    // update the pokemon matching the pokemonId
    // based on the req body
    // return a 404 if no pokemon matches that pokemonId 
    const body = req.body;
    const { name, health, level } = body
    const pokemonQuery = req.params.pokemonId;
    for (let i = 0; i < myPokemon.length; i++) {
        if (myPokemon[i].id === pokemonQuery) {
            myPokemon[i].name = name;
            myPokemon[i].health = health;
            myPokemon[i].level = level;
            res.send("update");
        }
    }
    res.status(200).send("not match");


})

router.delete('/:pokemonId', function (req, res) {
    // delete pokemon if pokemonId matches the id of one
    // return 200 even if no pokemon matches that Id
    const pokemonQuery = req.params.pokemonId;

    for (let i = 0; i < myPokemon.length; i++) {
        if (myPokemon[i].id === pokemonQuery) {
            myPokemon.slice(i, 1);
            res.send("Deleted");
        }
    }
    res.status(200).send("not match");
})

module.exports = router;

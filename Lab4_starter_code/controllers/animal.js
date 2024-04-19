const { request } = require("express");
const Animal = require("../model/Animal");

function displayHomePage(req, res){
    res.render("main.ejs")
}

// enter a new animal function
// gets the values from the form and uses the chema to create an animal object
async function enterNewAnimal(req, res){
    const formData = req.body

    //create our new database pokemon
    try{
        await Animal.create({
            Zoo: formData.homeZoo,
            ScientificName: formData.scientificName,
            CommonName: formData.commonName,
            GivenName: formData.givenName,
            Gender: formData.gender, 
            DateOfBirth: formData.dateOfBirth,
            Age: formData.age,
            isTransportable: formData.isTransportable, 
        })
    }catch (err){
        console.log(`ERROR in creating pokemon ${formData.commonNameName}`)
    }
    res.redirect("/");
}

// get all animals function gets all the animals in the databse
async function getAllAnimals(req, res){
    try{
        const allMyAnimals = await Animal.find({});
        res.render("all-animals.ejs", {allMyAnimals});
    }catch (err){
        console.err("Error with getting animal list");
        res.status(500).send("Error in getting animal list");
    }
}

// function to delete a slected animal from the DB
async function deleteAnimalByCName(req, res){
    try{
        const animalName = req.params.givenNameName;
        await Animal.deleteOne({ _commonName: animalName});
        res.redirect("/savedCollection")
    }catch (err) {
        console.err("Error with getting animal list");
        res.status(500).send("Error in getting animal list");
    }
}


// functions for displaying edit animal page as well as handling editing the animal
// display
function displayEditAnimal(req, res){
    res.render("editPokemon.ejs")
}

// handling the editing
async function editAnimal(req, res){
    const formData = req.body;

    try{
        await Animal.updateOne({_givenName: formData.givenName},{
            Zoo: formData.homeZoo,
            ScientificName: formData.scientificName,
            CommonName: formData.commonName,
            GivenName: formData.givenName,
            Gender: formData.gender, 
            DateOfBirth: formData.dateOfBirth,
            Age: formData.age,
            isTransportable: formData.isTransportable, 
        })
    }catch (err){
        console.log(`ERROR in editing pokemon ${formData.pokemonName}`)
    }
    res.redirect("/displayPokemon.ejs");
    
}

// exporting the functions to be used by the router
module.exports = {
    displayHomePage,
    enterNewAnimal,
    getAllAnimals,
    deleteAnimalByCName,
    displayEditAnimal,
    editAnimal,
}
const { request } = require("express");
const Animal = require("../model/Animal");

function displayHomePage(req, res){
    res.render("main.ejs")
}

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
            isTransportable: isTransportable, 
        })
    }catch (err){
        console.log(`ERROR in creating pokemon ${formData.commonNameName}`)
    }
    res.redirect("/");
}



module.exports = {
    displayHomePage,
    enterNewAnimal,
}
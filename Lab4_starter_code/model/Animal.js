const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
    Zoo: String,
    ScientificName: String, required,
    CommonName: String, required,
    GivenName: String, required,
    Gender: String, required, 
    DateOfBirth: Date, required,
    Age: Number, required,
    isTransportable: Boolean, required,
})
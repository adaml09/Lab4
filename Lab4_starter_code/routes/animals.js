// constants for exoress, router and controller
const express = require("express");
const animalController = require("../controllers/animal");

const router = express.Router();

// route for displaing the main.ejs page
router.get("/", animalController.displayHomePage);

// route for entering a new animal
router.post("/enterAnimal", animalController.enterNewAnimal);

// route for displaying the animals
router.get("/allAnimals", animalController.getAllAnimals);

// route for deleting an animal from the DB
router.post("/deleteAnimal/:commonName", animalController.deletePokemonByCName);

// routes for editing an animal in the DB
router.get("/editAnimal", animalController.displayEditAnimal);
router.get("/editAnimal", animalController.editAnimal);

module.exports = router;
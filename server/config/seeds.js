const db = require("./connection");
const { Profile, Product } = require("../models");

db.once("open", async () => {

    // Insert SEEDS for PROFILE here!!!
    
    await Product.deleteMany();
  const products = await Product.insertMany([
    {
      name: "Toyota Prado ",
      description: "Toyota Prado 2012 181,000KM",
      price: 18800,
      availability: TRUE,
      image: "prado.jpg",
    },
    {
      name: "Toyota RAV4",
      description: "Toyota RAV4 2018 67,000KM",
      price: 19800,
      availability: TRUE,
      image: "rav4.jpg",
    },
    {
      name: "Toyota Corolla",
      description: "Toyota Corolla 2016 70,000KM",
      price: 11800,
      availability: TRUE,
      image: "corolla.jpg",
    },
    {
      name: "Toyota Land Cruiser",
      description: "Toyota Land Cruiser 2013 115,000KM",
      price: 20900,
      availability: TRUE,
      image: "land-cruiser.jpg",
    },
    {
      name: "Toyota Hilux",
      description: "Toyota Hilux 2019 79,000 KM",
      price: 34500,
      availability: TRUE,
      image: "hilux.jpg",
    },
    {
      name: "Toyota Tundra",
      description: "Toyota Tundra 2014 50,000 KM",
      price: 16900,
      availability: TRUE,
      image: "tundra.jpg",
    },
  ]);

  console.log("products seeded");
});

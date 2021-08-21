const db = require("./connection");
const { Profile, Product, Post, Comment } = require("../models");

db.once('open', async () => {
    // Insert SEEDS for PROFILE here!!!
    await Profile.deleteMany();
    await Profile.create({
        firstName: 'Carlos',
        lastName: 'Brito',
        email: 'carlos@carlos.com',
        password: 'carlos'
    })
    console.log('profiles seeded');

    await Post.deleteMany();
    await Post.create([
        {
            picture: "",
            description: "My first Post",
            comments: []
        },
        {
            picture: "",
            description: "My second post",
            comments: []
        }
    ])
    console.log('posts seeded');
    
    await Comment.deleteMany();
    const comment = await Comment.create({
        text: "My first comment"
    })
    console.log('comments seeded');
    await Post.findOneAndUpdate({ description: "My first Post" }, {
        $push: { comments: comment._id }},
        { new: true }
    )
    console.log("comments seeded")

  await Product.deleteMany();
  const products = await Product.insertMany([
    {
      name: 'Toyota Prado ',
      description: 'Toyota Prado 2012 181,000KM',
      price: 18800,
      availability: true,
      image: "/images/toyota-prado.jpg",
    },
    {
      name: 'Toyota RAV4',
      description: 'Toyota RAV4 2018 67,000KM',
      price: 19800,
      availability: false,
      image: '/images/toyota-rav4.jpg',
    },
    {
      name: 'Toyota Corolla',
      description: 'Toyota Corolla 2016 70,000KM',
      price: 11800,
      availability: true,
      image: '/images/toyota-corolla.jpg',
    },
    {
      name: 'Toyota Land Cruiser',
      description: 'Toyota Land Cruiser 2013 115,000KM',
      price: 20900,
      availability: true,
      image: '/images/toyota-cruiser.jpg',
    },
    {
      name: 'Toyota Hilux',
      description: 'Toyota Hilux 2019 79,000 KM',
      price: 34500,
      availability: true,
      image: '/images/toyota-hilux.jpg',
    },
    {
      name: 'Toyota Tundra',
      description: 'Toyota Tundra 2014 50,000 KM',
      price: 16900,
      availability: false,
      image: '/images/toyota-tundra.jpg',
    },
  ]);

    console.log("products seeded");
    process.exit();
});

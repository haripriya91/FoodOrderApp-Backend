const express = require('express');
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const FoodList = require('./models/foodlistModel');
const Tags = require('./models/tagModel');
const Restaurants = require('./models/restaurantModel');
const cors = require('cors');
require('dotenv').config();

// Allow requests from localhost:4200
app.use(cors({
  origin: 'http://localhost:4200'
}));

// CORS middleware
const allowCrossDomain = (req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `http://localhost:4200`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
};
app.use(allowCrossDomain);

//routes

app.get('/', (req,res) =>{
    res.send('test');
})

app.get('/testFunctn', (req,res) =>{
    res.send('test');
})

const mongoDBUrl = process.env.mongoDBUrl;
//console.log(mongoDBUrl);  
//const mongoDBUrl = "mongodb+srv://FoodAppAdmin:Agl2020$24@cluster0.mwrvmxs.mongodb.net/FoodOrderApp?retryWrites=true&w=majority";

// Options for the MongoDB connection (optional)
const options = {
    useNewUrlParser: true, // Use the new URL parser
    useUnifiedTopology: true, // Use the new server discovery and monitoring engine
    // Add other options as needed
  };
//connection through mongoose
mongoose.connect(mongoDBUrl, options)
  .then(() => {
    console.log('Connected to MongoDB successfully');
    app.listen(3000, ()=>{
        console.log('node application started');
    })
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



// Define a route to get the food list
app.get('/foodList', async (req, res) => {
  try {
    const foodItems = await FoodList.find({});
    res.json(foodItems);
  } catch (error) {
    console.error('Error retrieving food list:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    //res.send(error);
  }
});

// Define a route to get the tags list
app.get('/tags', async (req, res) => {
  try {
    const tags = await Tags.find({});
    res.json(tags);
  } catch (error) {
    console.error('Error retrieving tag list:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    //res.send(error);
  }
});

// Define a route to get the restaurants list
app.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurants.find({});
    res.json(restaurants);
  } catch (error) {
    console.error('Error retrieving restaurant list:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    //res.send(error);
  }
});



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
/*const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/






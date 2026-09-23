
require("dotenv").config();

const express = require("express");
const app = express();

const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");

const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB URI
const uri = process.env.MONGODB_URI;

// MongoDB Client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Database and Collection
const database = client.db("samplefirstbd");
const usersCollection = database.collection("users");

// Root Route
app.get("/", (req, res) => {
  res.send("Simple CRUD Server");
});

// POST Route - Add User
app.post("/users", async (req, res) => {
  try {
    const user = req.body;

    console.log("User received:", user);

    const result = await usersCollection.insertOne(user);

    res.status(201).json({
      success: true,
      message: "User added successfully",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("Insert error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to add user",
    });
  }
});

// Start Server After MongoDB Connection
async function run() {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

run();
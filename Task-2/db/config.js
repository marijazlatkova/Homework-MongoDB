const mongoose = require("mongoose");

const uri =
  "mongodb+srv://marijazlatkova44:testpassword@cluster0.tonpgxf.mongodb.net/users?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected to MongoDB Database");
  } catch (err) {
    console.log(err.message);
  }
};

connect();

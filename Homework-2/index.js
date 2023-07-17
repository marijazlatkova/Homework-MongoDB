//! Try to implement new model named Accounts
//? implement schema for Accounts
//? import the Accounts in index.js

const mongoose = require("mongoose");
const User = require("./user");
const Account = require("./accounts");

async function run() {
  try {
    await mongoose.connect("mongodb+srv://marijazlatkova44:testpassword@cluster0.tonpgxf.mongodb.net/users?retryWrites=true&w=majority", {
      useNewUrlParser: true, //* url do nashata data baza
      useUnifiedTopology: true, //* konfiguracijata za taa data baza
    });
    console.log("Connected to MongoDB Atlas");

    const bestFriend = new User({
      name: "Jane Smith",
      age: 25,
      email: "jane_smith@gmail.com",
      bestFriend: null,
      hobbies: ["music", "swimming", "hiking"],
      address: {  
        street: "683 Fremont Street",
        city: "Las Vegas",
        state: "Nevada",
        country: "USA" 
      },
    });
    await bestFriend.save();

    const user = new User({
      name: "John Doe",
      age: 23,
      email: "john_doe@gmail.com",
      bestFriend: bestFriend,
      hobbies: ["reading", "sports", "painting"],
      address: { 
        street: "123 Castro Street",
        city: "San Francisco",
        state: "California",
        country: "USA"
      },
    });
    await user.save();

    const userAccount = new Account({
      accountNumber: "123456789",
      accountType: "Savings",
      balance: 5000,
      isActive: true,
      openedDate: new Date(),
      owner: user
    });
    await userAccount.save();

    const bestFriendAccount = new Account({
      accountNumber: "154873201",
      accountType: "Checking",
      balance: 2500,
      isActive: true,
      openedDate: new Date(),
      owner: bestFriend
    });
    await bestFriendAccount.save();

  } catch (err) {
    console.log("An error has occurred", err);
  } finally {
    mongoose.disconnect();
    console.log("Disconnected from MongoDB Atlas");
  }
};

run();
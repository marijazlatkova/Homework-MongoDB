const mongoose = require("mongoose");

//* schema ni go definira teloto na dokumentot
const addressSchema = mongoose.Schema({
  street: String,
  city: String,
  state: String,
  country: String
}, { _id: false });

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User"
  },
  hobbies: [String],
  address: addressSchema,
});

//* prviot parametar e imeto na modelot
//* vtoriot parametar e teloto na dokumentot
//* tretiot parametar e kolekcijata
module.exports = mongoose.model("User", userSchema, "users");
const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
  accountNumber: String,
  accountType: String,
  balance: Number,
  isActive: Boolean,
  openedDate: Date,
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Account", accountSchema, "accounts");
const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
  accountNumber: String,
  accountType: String,
  balance: Number,
  isActive: Boolean,
  openedDate: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

const Account = mongoose.model("Account", accountSchema, "accounts");

const findAccounts = async () => {
  return await Account.find({});
};

const create = async (data) => {
  const account = new Account(data);
  return await account.save();
};

const update = async (id, data) => {
  return await Account.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return await Account.deleteOne({ _id: id });
};

module.exports = {
  findAccounts,
  create,
  update,
  remove,
};
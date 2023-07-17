const { create, findAccounts, update, remove } = require("../models/account");

const getAllAccounts = async (req, res) => {
  try {
    const users = await findAccounts();
    return res.status(200).send(users);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const createAccount = async (req, res) => {
  try {
    await create(req.body);
    return res.status(201).send(req.body)
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const updateAccount = async (req, res) => {
  try {
    await update(req.params.id, req.body);
    return res.status(204).send("");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error")
  }
};

const removeAccount = async (req, res) => {
  try {
    await remove(req.params.id);
    return res.status(204).send("");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAllAccounts,
  createAccount,
  updateAccount,
  removeAccount
};
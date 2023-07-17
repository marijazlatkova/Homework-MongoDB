const express = require("express");
const { getAllAccounts, createAccount, updateAccount, removeAccount } = require("./controllers/controller");
require("./db/config");

const app = express();

app.use(express.json());

app.get("/accounts", getAllAccounts);
app.post("/accounts", createAccount);
app.put("/account/:id", updateAccount);
app.delete("/account/:id", removeAccount);

const port = 8080;

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log( `Server started on port ${port}`);
});
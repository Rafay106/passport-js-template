require("dotenv").config();
const express = require("express");
require("./config/db")();
const session = require("express-session");
const MongoStore = require("connect-mongo");

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));

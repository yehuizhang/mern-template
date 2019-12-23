const connectDB = require("./config/db");
const express = require("express");
const { PORT } = require("./config/configs");
// const loadDummyUsers = require('./utils/loadDummyUsers');

connectDB();
const app = express();
app.use(express.json());

app.use("/api/auth", require("./api/auth"));
app.use("/api/user", require("./api/user"));
app.use("/api/list", require("./api/list"));

app.listen(PORT, () => console.log(`The server is running on ${PORT}`));

// loadDummyUsers();

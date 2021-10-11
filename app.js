require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const DB = require("./DB/conn");

// Route calling
const taskRoutes = require("./routes/tasks");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// Routes
app.use("/api/v1/tasks", taskRoutes);

// Listening
app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});

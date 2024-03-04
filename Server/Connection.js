const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser"); // Import body-parser middleware

const port = 3036;
const app = express(); // Creating an instance of Express
const apiRoutes = require("./routes/api");

// Middleware to parse JSON and urlencoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use("/api", apiRoutes);

// Start server
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")


const app = express();


//-.env processes
const port = process.env.PORT

//-midle weare
app.use(express.json());

//-Routing 

const itemRoutes = require('./routes/itemRoutes');
app.use("/items", itemRoutes);



//-Serverstartupp and conektions
/// Conect Mogodb to server
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to MongoDB successfully");
});

// Link the server to a port
app.listen(port, (err) => {
  console.log(`Listening on port: http://localhost:${port}/`);
});
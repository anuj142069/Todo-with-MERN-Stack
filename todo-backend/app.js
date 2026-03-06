// Core Module
const path = require('path');

// External Module
const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors');
const DB_PATH = "mongodb+srv://user:anuj142069@cluster0.mryid43.mongodb.net/todo";

//Local Module
const todoItemsRouter = require("./routes/todoItemsRouter")
const errorsController = require("./controllers/errors");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use("/api/todo", todoItemsRouter);

app.use(errorsController.pageNotFound);

const PORT = process.env.PORT || 3001;

mongoose.connect(DB_PATH).then(() => {
  // console.log('Connected to Mongo');
  app.listen(PORT);
})
// .catch(err => {
  // console.log('Error while connecting to Mongo: ', err);
// });

const express = require(`express`);
const app = express();
const dotenv = require("dotenv").config();
const path = require(`path`);

const port = process.env.PORT || 5000;
const connectDatabase = async () => {
  try {
    const mongoose = require(`mongoose`);
    const connection = await mongoose.connect(process.env.database);
    console.log(`connected to database`);
    app.listen(port, console.log(`Server is listening to request`));
    app.use(express.static(`client`));
    app.use(express.urlencoded({ extended: false }));
    module.exports = mongoose;
    const router = require(`./middlewares/Routes`);
    app.use(router);
  } catch (error) {
    console.log(error);
  }
};
connectDatabase();

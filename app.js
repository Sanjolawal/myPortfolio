const express = require(`express`);
const app = express();
const upload = require(`express-fileupload`);
const path = require(`path`);
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server is listening to request`));
app.use(express.static(`client`));

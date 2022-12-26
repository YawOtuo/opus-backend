// server.js
require("dotenv").config();
const express = require('express');
const fs = require('fs')
const path = require('path')

const models = require('./models')
const app = express()
const cors = require('cors');


var mysqlApostrophe = require("mysql-apostrophe")
var bodyParser = require("body-parser");

app.use(express.json({ extended: false }));
app.use(cors({ origin: true, credentials: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(mysqlApostrophe);


//Routes for handling specific requests



const PORT = process.env.PORT || 8000;


app.get('', (req, res) => res.send('Server up and running'));



models.sequelize.sync().then((req)=> {
    app.listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}`)
    });
})

module.exports = app;
// server.js
require("dotenv").config();
const express = require('express');
const fs = require('fs')
const path = require('path')

const models = require('./models')
const app = express()
const cors = require('cors');
const email_routes = require('./routes/email.routes')
const header_routes = require('./routes/header.routes')


var mysqlApostrophe = require("mysql-apostrophe")
var bodyParser = require("body-parser");

app.use(express.json({ extended: false }));
app.use(cors({ origin: true, credentials: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(mysqlApostrophe);


app.use('/api/emails', email_routes)
app.use('/api/headers', header_routes)

//Routes for handling specific requests



const PORT = process.env.PORT || 8000;


app.get('', (req, res) => res.send('Server up and running'));



models.sequelize.sync().then((req)=> {
    app.listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}`)
    });
})

module.exports = app;
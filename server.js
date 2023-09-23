const express = require('express');
const app = express();
require('dotenv').config();
const dbConfig = require('./config/dbConfig');
const port = process.env.port || 5000;
app.listen(port, () => console.log('NodeJs server listening on port ' + port + '!;'));

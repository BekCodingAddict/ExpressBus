const express = require('express');
const app = express();
require('dotenv').config();
const dbConfig = require('./config/dbConfig');
const port = process.env.port || 5000;

app.use(express.json());
const usersRoute=require('./routes/usersRoute');
const busesRoute=require('./routes/busesRoute');

app.use('/api/users',usersRoute);
app.use('/api/buses',busesRoute);
app.listen(port, () => console.log('NodeJs server listening on port ' + port + '!;'));

const express = require('express');
const mongoose = require('mongoose');
const { SECRET_MONGO_URI } = require('./constant');

const app = express();

const mongoUri = SECRET_MONGO_URI;

mongoose.connect(mongoUri);
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
});

app.get('/', (req, res) => {
    res.send('Hi There!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
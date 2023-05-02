require('dotenv').config();

const mongoose = require('mongoose');

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString, { useNewUrlParser: true });

const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

module.exports = database

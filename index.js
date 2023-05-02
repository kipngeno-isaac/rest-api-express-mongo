require('./src/database/connection')
const express = require('express');
const routes = require('./src/routes/routes');



const app = express();

app.use(express.json());
app.use('/api', routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

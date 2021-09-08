const express = require('express');

const router = require('./routes/students.js');

const app = express();
const port  = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/students', router);
app.get('/api', (req, res) => res.send("Welcome to my API!"))
app.get("*", (req, res) => res.status(404).send("There is no content at this route."));


app.listen(port, () => console.log(`Server is listening on port ${port}`));
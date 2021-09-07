import express from 'express';

import router from './routes/students.js';

const app = express();
const port  = process.env.PORT || 3000;

app.get('/api', (req, res) => {
   res.send("Welcome to my API!");
})

app.use('/api/students', router);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
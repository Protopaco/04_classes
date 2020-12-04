const express = require('express');
const app = express();
const linter = require('./linter.js');

app.use(express.json());

app.post('/test/', (req, res) => {
    console.log(req.body);
    res.status(200).json({ greeting: 'HELLO POSTMAN!' })
})

app.post('/lint/', (req, res) => {
    const passedData = req.body;
    const verdict = linter(passedData);
    res.status(200).json(verdict)

})

app.listen(3000, () => {
    console.log('HI! 3000')
})
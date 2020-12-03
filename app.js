const express = require('express');
const app = express();

app.use(express.json());

app.post('/test/', (req, res) => {
    console.log(req.body);
    res.status(200).json({ greeting: 'HELLO POSTMAN!' })
})

app.listen(3000, () => {
    console.log('HI! 3000')
})
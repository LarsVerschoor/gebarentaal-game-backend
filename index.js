const express = require('express')
// const {Lesson, Word} = require('./database/models');
const app = express();
const v1GameRouter = require('./routes/v1/v1GameRouter')

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
    const acceptHeader = req.headers['accept'];
    if (acceptHeader.includes('application/json') || req.method === 'OPTIONS') {
        next();
    } else {
        res.status(406).json('Illegal accept header')
    }
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next()
})

app.use((req, res, next) => {
    const acceptHeader = req.headers['accept'];
    if (acceptHeader.includes('application/json') || req.method === 'OPTIONS' ){
        next()
    } else {
        res.status(406).send('Illegal format, only use json');
    }

})

// Hier zouden dus meerdere versies van de API geregistreerd kunnen worden
app.use('/api/v1/', v1GameRouter);

const port = process.env.EXPRESS_PORT || 8000;
app.listen(port , () => {
    console.log(`Server is listening on port ${port}`);
});

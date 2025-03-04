const express = require('express')
// Import hier alle routers voor alle versies
const v1TestRouter = require('./routes/v1/testRouter.js')
const v2TestRouter = require('./routes/v2/testRouter.js')

const app = express();

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

// Hier zouden dus meerdere versies van de API geregistreerd kunnen worden
app.use('/api/v1/', v1TestRouter);
app.use('/api/v2/', v2TestRouter);

const port = process.env.EXPRESS_PORT || 8000;
app.listen(port , () => {
    console.log(`Server is listening on port ${port}`);
});

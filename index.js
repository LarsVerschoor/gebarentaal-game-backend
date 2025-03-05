import express from 'express';
// import versions
import gameRouter from './routes/v1/gameRouter';

const {Word} = require('./database/models');

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

app.use('/api/v1/', gameRouter);

const port = process.env.EXPRESS_PORT || 8000;
app.listen(port , () => {
    console.log(`Server is listening on port ${port}`);
});
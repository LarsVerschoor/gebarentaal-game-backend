const express = require('express')
// const {Lesson, Word} = require('./database/models');
const app = express();
const v1GameRouter = require('./routes/v1/v1GameRouter');
const v2GameRouter = require('./routes/v1/v1GameRouter');
const accessKeyRouter = require('./routes/access-key-router');

const requireAcceptHeader = require('./middlewares/require-accept-header');
const requireAccessKey = require('./middlewares/require-access-key');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    next();
});

app.use('/keys', accessKeyRouter);

app.use(requireAcceptHeader);
app.use(requireAccessKey);

// Hier zouden dus meerdere versies van de API geregistreerd kunnen worden
app.use('/api/v1/', v1GameRouter);
app.use('/api/v2/', v2GameRouter);

const port = process.env.EXPRESS_PORT || 8000;
app.listen(port , () => {
    console.log(`Server is listening on port ${port}`);
});

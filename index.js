const express = require('express')
const accessKeyRouter = require('./routes/access-key-router');
const requireAcceptHeader = require('./middlewares/require-accept-header');
const requireAccessKey = require('./middlewares/require-access-key');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const routers = {
    v1: require('./routes/v1'),
    v2: require('./routes/v2'),
}

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, x-access-key, Content-Type, Accept');
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
Object.keys(routers).forEach((version, index) => {
    // The specified route always takes priority
    app.use(`/api/${version}`, routers[version]);

    // When the specified route is missing the route, fall back 1 route
    for (let i = index - 1; i >= 0; i--) {
        app.use(`/api/${version}`, routers[Object.keys(routers)[i]]);
    }
});

const port = process.env.EXPRESS_PORT || 8000;
app.listen(port , () => {
    console.log(`Server is listening on port ${port}`);
});

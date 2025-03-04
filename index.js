const express = require('express')
// Import hier alle routers voor alle versies
const v1TestRouter = require('./routes/v1/testRouter.js')
const v2TestRouter = require('./routes/v2/testRouter.js')

const {Lesson, Word} = require('./database/models');

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

// const test = async() => {
//     const newLesson = await Lesson.create({number: 1, video_path: 'hallo'});
//     const newWord = await  Word.create({name: 'name', video_path: 'path-hallo'});
//     await newLesson.addWord(newWord);
// }
//
// test();
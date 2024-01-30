import express from 'express';
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';
import path from 'path';

const app = express();
const port = 3000;


const pub = path.join(__dirname, 'public, index.html');

app.use(morgan('combined'));

app.get('/index', function (req, res) {
    res.sendFile(path.join(pub, 'index.html'));
});

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
     debug.log('listening on port: ' + chalk.red(port));
})

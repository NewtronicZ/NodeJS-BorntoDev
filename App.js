const express  = require('express');
const chalk = require('chalk');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log('listening on port' + chalk.red(port));
})
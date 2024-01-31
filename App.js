import express from 'express';
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path'; // Import the 'join' function from the 'path' module

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(morgan('combined'));

// Use the 'join' function to correctly build the path for static files
app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    debug.log('listening on port: ' + chalk.red(port));
});

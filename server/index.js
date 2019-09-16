const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const envvironment = process.env.NODE_ENV;

app.get('/hello', (req, res) => res.send('Hello'))
app.use('/assets', express.static('assets'))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'assets/index.html')));

app.listen(port, () => console.log(`${envvironment} app listening on port ${port}!`))
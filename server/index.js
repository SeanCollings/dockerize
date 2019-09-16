const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const apiUrl = process.env.API_URL;

app.get('/health/ping', (req, res) => res.send('OK'))
app.get('/hello', (req, res) => res.send(`Hello ${apiUrl}`))
app.use('/assets', express.static('assets'))
app.get('*', (req, res) => {
  const file = fs.readFileSync(path.join(__dirname, 'assets/index.html'), 'utf8');

  const replaced = file.replace('###API_URL###', apiUrl);

  res.send(replaced)
}
);

app.listen(port, () => console.log(`${apiUrl} app listening on port ${port}!`))
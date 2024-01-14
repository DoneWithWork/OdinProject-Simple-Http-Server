const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));

app.get('/', (req, res) => res.sendFile('index.html', { root: staticPath }));
app.get('/about', (req, res) => res.sendFile('about.html', { root: staticPath }));
app.get('/contact-me', (req, res) => res.sendFile('contactme.html', { root: staticPath }));

app.use((req, res) => res.sendFile('404.html', { root: staticPath }));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

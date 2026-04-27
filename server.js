const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/how-it-works', (req, res) => res.sendFile(path.join(__dirname, 'public', 'how-it-works.html')));
app.get('/features', (req, res) => res.sendFile(path.join(__dirname, 'public', 'features.html')));
app.get('/pilot', (req, res) => res.sendFile(path.join(__dirname, 'public', 'pilot.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'public', 'contact.html')));

app.use((req, res) => res.status(404).redirect('/'));

app.listen(PORT, () => console.log(`ClientBridge site running on port ${PORT}`));

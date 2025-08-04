const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const dataPath = path.join(__dirname, 'visits.json');

// Route pour récupérer le nombre de visites
app.get('/visits/:userId', (req, res) => {
  const userId = req.params.userId;
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send(err);
    const visits = JSON.parse(data);
    res.send({ visits: visits[userId] || 0 });
  });
});

// Route pour incrémenter le nombre de visites
app.post('/visits/:userId', (req, res) => {
  const userId = req.params.userId;
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send(err);
    const visits = JSON.parse(data);
    visits[userId] = (visits[userId] || 0) + 1;
    fs.writeFile(dataPath, JSON.stringify(visits), (err) => {
      if (err) return res.status(500).send(err);
      res.send({ visits: visits[userId] });
    });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
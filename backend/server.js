const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API endpoint to get all loans
app.get('/api/loans', (req, res) => {
  const loansFilePath = path.join(__dirname, 'loans.json');
  fs.readFile(loansFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred while reading the loans data.');
    }
    res.json(JSON.parse(data));
  });
});

app.get('/', (req, res) => {
    res.send('Backend server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

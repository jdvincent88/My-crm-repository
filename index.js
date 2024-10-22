const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const SQUARE_ACCESS_TOKEN = process.env.SQUARE_ACCESS_TOKEN;

app.use(express.json());

// Endpoint to fetch customers from Square
app.get('/api/customers', async (req, res) => {
  try {
    const response = await axios.get('https://connect.squareup.com/v2/customers', {
      headers: { Authorization: `Bearer ${SQUARE_ACCESS_TOKEN}` },
    });
    res.json(response.data.customers);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching customers');
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
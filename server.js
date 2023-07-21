const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const port = 3000;

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Middleware to parse incoming JSON data
app.use(express.json());

// Routes
app.use('/users', require('./routes/users'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

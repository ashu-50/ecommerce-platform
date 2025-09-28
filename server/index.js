import express from 'express';
import dotenv from 'dotenv';

// Configure dotenv to read .env file
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

// A simple test route to make sure the server is working
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
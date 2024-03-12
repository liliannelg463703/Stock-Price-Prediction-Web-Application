// Import necessary libraries
const express = require('express');
const bodyParser = require('body-parser');
const stockPredictionModel = require('./stockPredictionModel');

// Initialize the Express app
const app = express();
const port = 3000;

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Define routes
app.get('/predict', async (req, res) => {
    try {
        const { stockSymbol, predictionInterval } = req.query;
        // Call the function to predict stock prices
        const predictions = await stockPredictionModel.predict(stockSymbol, predictionInterval);
        res.json({ predictions });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

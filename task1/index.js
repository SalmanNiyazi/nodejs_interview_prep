/*
Create a Basic HTTP Server:
Write a Node.js script to create a simple HTTP server that responds to requests with a "Hello, World!" message.
How would you modify this server to serve JSON data instead?
 */
import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
})

app.listen(3000,() => {
    console.log(`Server is running on http://localhost:3000`);
})


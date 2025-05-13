import express from 'express';
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3000;

// Define a simple route that responds with 'Hello, World!'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.get('/ec2', (req, res) => {
  res.send('Welcome to AWS EC2');
});
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

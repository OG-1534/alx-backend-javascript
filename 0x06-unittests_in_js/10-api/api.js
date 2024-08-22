const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 7865;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// GET /available_payments endpoint
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// POST /login endpoint
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

// GET /cart/:id endpoint
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// Invalid routes default handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

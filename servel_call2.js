const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

// Set up the PostgreSQL database connection
const pool = new Pool({
  user: 'postgres',
  host: '193.164.149.85',
  database: 'texnodvizh_db',
  password: 'pswwdpost',
  port: 5432
});
const opn = require('opn');
const port = 5505;
opn(`http://localhost:${port}/check-score`);
const app = express();

// Use CORS middleware to allow cross-origin requests
app.use(cors());

app.get('/check-score', async (req, res) => {
  try {
    const result = await pool.query('SELECT state_of_vidget FROM score WHERE id = 1');
    const stateOfVidget = result.rows[0].state_of_vidget;
    res.send(`${stateOfVidget}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/check-score`);
});
``

// This should allow cross-origin requests to your `/check-score` endpoint, and the error should no longer occur.

// However, note that CORS is a security feature to prevent unauthorized cross-origin requests. Therefore, you should only enable CORS for trusted domains.

// In production, it is recommended to configure CORS to allow requests only from the domains that you trust. You can do this by passing an options object to the `cors` middleware, which specifies the allowed origins, methods, headers, and other options.

// For more information, check the [Express CORS documentation](https://expressjs.com/en/resources/middleware/cors.html).
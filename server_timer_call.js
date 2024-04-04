const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

// Set up the PostgreSQL database connection
// const pool = new Pool({
//   user: 'postgres',
//   host: '193.164.149.85',
//   database: 'texnodvizh_db',
//   password: 'pswwdpost',
//   port: 5432
// });

const pool = new Pool({
  user:'postgres',
  host: 'localhost',
  database: 'localdb',
  password: 'post',
  port: 5432
})
const opn = require('opn');
const port = 5500;
opn(`http://localhost:${port}/check-timer`);
const app = express();

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// app.get('/check-timer', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT progress_bar_state FROM score WHERE id = 1');
//     const stateOfTimer = result.rows[0].progress_bar_state;
//     res.send(`${stateOfTimer}`);
//   } catch (err) {
//     // console.error(err);
//     // res.status(500).send('Internal Server Error');
//   }
// });

setInterval(() => {
  app.get('/check-timer', async (req, res) => {

      const result = await pool.query('SELECT timer_state FROM localdb');
      const stateOfTimer = result.rows[0].timer_state;
      res.send(`${stateOfTimer}`);
  });
}, 500);

app.listen(port, () => {
  console.log(`https://localhost:${port}/check-timer`);
});
``

// This should allow cross-origin requests to your `/check-score` endpoint, and the error should no longer occur.

// However, note that CORS is a security feature to prevent unauthorized cross-origin requests. Therefore, you should only enable CORS for trusted domains.

// In production, it is recommended to configure CORS to allow requests only from the domains that you trust. You can do this by passing an options object to the `cors` middleware, which specifies the allowed origins, methods, headers, and other options.

// For more information, check the [Express CORS documentation](https://expressjs.com/en/resources/middleware/cors.html).
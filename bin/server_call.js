const express = require('express');
const app = express();


// Handle requests to the /update-score route
app.get('/update-score', (req, res) => {
  // Get the ID of the score row
  const id = req.query.id;

  // Connection string for your PostgreSQL database
  const connectionString = 'postgresql://postgres:pswwdpost@193.164.149.85:5432/texnodvizh_db';

  // Connect to the database
  const pool = new Pool({ connectionString });

  // Connect to the database
  pool.connect((error, client, done) => {
    if (error) {
      console.error('Error connecting to the database', error);
      return res.status(500).send('Internal Server Error');
    }

    // Get the value of the state_of_vidget cell
    client.query('SELECT state_of_vidget FROM score WHERE id = $1', [id], (err, res) => {
      if (err) {
        console.error('Error getting value from database', error);
        return res.status(500).send('Internal Server Error');
      }

      // Send the state_of_vidget cell as a response
      const stateOfVidget = res.rows[0].state_of_vidget;
      res.send(stateOfVidget);
      res.send(`Score for ID ${id} has been updated to 1.`);

      // Release the database connection
      done();
    });
  });
});

// Start the server
app.listen(5050, () => {
  console.log('Server listening on port 5050');
});
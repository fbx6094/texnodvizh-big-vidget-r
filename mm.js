const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
    user: 'postgres',
    host: '193.164.149.85',
    database: 'texnodvizh_db',
    password: 'pswwdpost',
    port: 5432,
});

app.get('/api/score/:name_team_2', async (req, res) => {
  const nameTeam2 = req.params.name_team_2;
  try {
    const result = await pool.query(
      'SELECT * FROM score WHERE name_team_2 = $1',
      [nameTeam2]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
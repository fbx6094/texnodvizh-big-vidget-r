// server.js
const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const port = 5089;
const ipv4adress = '192.168.23.32';
const opn = require('opn');


const pool2 = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'localdb',
  password: 'post',
  port: 5432
})
// Подключение к базе данных
const pool = new Pool({
  user: 'postgres',
  host: '193.164.149.85',
  database: 'texnodvizh_db',
  password: 'pswwdpost',
  port: 5432,
});
opn(`http://${ipv4adress}:${port}`);
// app.use(express.static(__dirname + '/public/css'));
app.get('/', (req, res) => {
  // Вывод веб-страницы с кнопками 
  res.sendFile(path.join(__dirname + '/cpl.html'));
});

app.get('/update-score', (req, res) => {
  const action = req.query.action;
  let updateValue = 0;
  let msg;
  let transmitter;

  if (action === 'judgement_in_progress') {
    updateValue = 1;
    transmitter = 1;
    msg = 'JUDGEMENT SCREEN'
    pool.query('UPDATE score SET state_of_vidget=1', (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: 'Ошибка обновления ячейки' });
        console.log("success: false, message: Ошибка обновления ячейки  ", msg);
      } else {
        res.json({ success: true, message: 'Ячейка успешно обновлёна' });
        console.log("success: true, message: Ячейка успешно обновлёна  ", msg);
      }
    });
  } else if (action === 'show_winner') {
    updateValue = 2;
    transmitter = 2;
    msg = 'WINNER SCREENR'
    pool.query('UPDATE score SET state_of_vidget=2', (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: 'Ошибка обновления ячейки' });
        console.log("success: false, message: Ошибка обновления ячейки  ", msg);
      } else {
        res.json({ success: true, message: 'Ячейка успешно обновлёна' });
        console.log("success: true, message: Ячейка успешно обновлёна  ", msg);
      }
    });
  } else if (action === 'new_match_bout_to_begin') {
    updateValue = 3;
    transmitter = 3;
    msg = 'NEW MATCH LOADING SCREEN';
    pool.query('UPDATE score SET state_of_vidget=3', (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: 'Ошибка обновления ячейки' });
        console.log("success: false, message: Ошибка обновления ячейки  ", msg);
      } else {
        res.json({ success: true, message: 'Ячейка успешно обновлёна' });
        console.log("success: true, message: Ячейка успешно обновлёна  ", msg);
      }
    });
  } else if (action === 'restart') {
    updateValue = 0;
    transmitter = 0;
    msg = 'PAGE RESTARTED';
    pool.query('UPDATE score SET state_of_vidget=0', (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: 'Ошибка обновления ячейки' });
        console.log("success: false, message: Ошибка обновления ячейки  ", msg);
      } else {
        res.json({ success: true, message: 'Ячейка успешно обновлёна' });
        console.log("success: true, message: Ячейка успешно обновлёна  ", msg);
      }
    });
  } else if (action === 'start_timer') {
    updateValue = 0;
    transmitter = 0;
    msg = 'TIMER STARTED';
    pool.query('UPDATE score SET progress_bar_state=1', (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: 'Ошибка обновления ячейки' });
        console.log("success: false, message: Ошибка обновления ячейки  ", msg);
      } else {
        res.json({ success: true, message: 'Ячейка успешно обновлёна' });
        console.log("success: true, message: Ячейка успешно обновлёна  ", msg, "  VALUE = 1");
      }
    });
    setTimeout(() => {
      pool.query('UPDATE score SET progress_bar_state=0', (error, results) => {
        if (error) {
          console.log("success: false, message: Ошибка обновления ячейки  ", msg);
        } else {
          console.log("success: true, message: Ячейка успешно обновлёна  ", msg, "  VALUE = 0");
        }
      });
    }, 1000);
  } else if (action === 'reset_timer') {
    updateValue = 0;
    transmitter = 0;
    msg = 'TIMER RESTARTED';
    pool.query('UPDATE score SET progress_bar_state=0', (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: 'Ошибка обновления ячейки' });
        console.log("success: false, message: Ошибка обновления ячейки  ", msg);
      } else {
        res.json({ success: true, message: 'Ячейка успешно обновлёна' });
        console.log("success: true, message: Ячейка успешно обновлёна  ", msg);
      }
    });
  } else if (action === 'restart_timer') {
    updateValue = 0;
    transmitter = 0;
    msg = 'TIMER RELOADED';
    pool.query('UPDATE score SET progress_bar_state=2', (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: 'Ошибка обновления ячейки' });
        console.log("success: false, message: Ошибка обновления ячейки  ", msg);
      } else {
        res.json({ success: true, message: 'Ячейка успешно обновлёна' });
        console.log("success: true, message: Ячейка успешно обновлёна  ", msg);
      }
    });
    setTimeout(() => {
      pool.query('UPDATE score SET progress_bar_state=0', (error, results) => {
        if (error) {
          console.log("succes: false, message: Ошибка обновления ячейки   ", msg);
        } else {
          console.log("success: true, message: Ячейка успешно обновлена  ", msg);
        }
      });
    }, 750);
  }
});

app.listen(port, ipv4adress, () => {
  // console.log(`Сервер запущен на ${ipv4adress} порт ${port}`);
  // console.log(`Сервер запущен на ${port}-ом порту `);
  console.log(`${ipv4adress}:${port}`)
});
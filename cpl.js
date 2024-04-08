// server.js
const express = require('express');
const { Pool } = require('pg');

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
  res.send(`
  <html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="style.css"> -->
    <style>
        * {
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #303030;
        }

        .notification{
          display:none;
          jusfity-content:center;
          position:absolute;
          top:4%;
          left:50%;
          transform:translaste(-50%);
        }

        .container {
            display: flex;
            justify-content: center;
            margin: 0 auto;
            max-width: 80rem;
            padding: 2rem;
        }

        .column {
            display: flex;
            flex-direction: column;
            flex-basis: calc(40% - 2rem);
            margin: 1rem;
        }

        .left {
            align-self: flex-start;
            order: 1;
        }

        .right {
            align-self: flex-end;
            order: 1;
        }

        .center {
            position: absolute;
            left: 50%;
            top: 190%;
            transform: translate(-50%);
            order: 2;
            /* margin-top: -50px; */
        }

        button {
            background-color: #2e5fe6;
            border-radius:7px;
            border: none;
            color: white;
            padding: 0.5rem 1rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 1rem;
            margin: 0.5rem 0;
            cursor: pointer;
            width:  200%;
            position:relative;
            left:50%;
            transform:translate(-50%);
        }

        /* @media (max-width: 768px) {
      .container {
          flex-direction: column;
      }
  
      .column {
          flex-basis: 100%;
      }
  } */
    </style>
</head>

<body>
    <div class="app" id="app">
        <div class="container">
        <div class = 'notification'>
          Ячейка обновлена
        </div>
            <div class="column left">
                <button onclick="updateScore('start_timer')">Запустить таймер</button>
                <br>
                <br>
                <button onclick="updateScore('reset_timer')">Сбросить таймер</button>
                <br>
                <br>
                <button onclick="updateScore('judgement_in_progress')">Судьи принимают решение....</button>
                <br>
                <br>
                <button onclick="updateScore('show_winner')">Показать победителя</button>
                <br>
                <br>
                <button onclick="updateScore('new_match_bout_to_begin')">Скоро начнется новый матч.....</button>
                <br>
                <br>
                <button onclick="updateScore('restart')">Домой</button>
                <br>
                <br>
                <button onclick="updateScore('restart_timer')">Перезапуск таймера</button>
                <br>
                <br>
            </div>


        </div>
    </div>

</body>
<script>
    // src = 'script.js';
    const { onMounted, createApp, ref } = Vue;
    createApp({
        setup() {
            const message = ref("Hello vue!");
            const data = ref({
                final_winner: "null",
                id: "adsadsadsadasdasd",
                score_team_1: "0",
                name_team_1: "Name 1",
                score_team_2: "0",
                name_team_2: "Name 2",
                timer: true,
                timer_start: "2018-25-12 23:50:55",
                timer_end: "2018-25-12 23:50:55",
                team_1_score_street_1: 0,
                team_1_score_street_2: 0,
                team_1_score_street_3: 0,
                team_2_score_street_1: 0,
                team_2_score_street_2: 0,
                team_2_score_street_3: 0,
                team_score_street_main: 0,
                progress_bar_state: 0,
                state_of_vidget:0,
            });
            const fetchData = () => {
                setInterval(() => {
                    fetch("http://193.164.149.85:5000/scores").then((result) =>

                        //fetch("http://185.68.22.42:3000/scores").then((result) =>
                        result.json().then((res) => {
                            data.value = res[0];
                        })
                    );
                }, 100); // Обновление каждые n секунды
            };
            fetchData();

           
            return {
                message,
                data,
            };
        },
    }).mount('#app')

    function updateScore(action) {
        fetch('/update-score?action=' + action)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Ошибка:', error));
    }
</script>

</script>

</html>
  `);
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
        console.log("success: true, message: Ячейка успешно обновлёна  ", msg);
      }
    });
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
        if  (error){
          console.log("succes: false, message: Ошибка обновления ячейки   ", msg);
        }else{
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
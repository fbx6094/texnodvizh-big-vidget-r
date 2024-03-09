var button = document.getElementById("myButton");
var timer = document.getElementById("timer")
var loader = document.getElementById("loader")

function button_hide() {
    button.style.display = "none";
    timer.style.display = "block";
    loader.style.display = "block";

}
function timerfnc() {
    // Устанавливаем время в секундах
    var timeLeft = 120;

    // Функция для обновления таймера
    function updateTimer() {
        // Получаем элемент с id "timer"
        var timerElement = document.getElementById("timer");

        // Вычисляем минуты и секунды
        var minutes = Math.floor(timeLeft / 60);
        var seconds = timeLeft % 60;

        // Добавляем ведущий ноль, если значение минут или секунд меньше 10
        var formattedMinutes = ("0" + minutes).slice(-2);
        var formattedSeconds = ("0" + seconds).slice(-2);

        // Обновляем текст в элементе таймера
        timerElement.textContent = formattedMinutes + ":" + formattedSeconds;

        // Уменьшаем время на 1 секунду
        timeLeft--;

        // Проверяем, если время закончилось, останавливаем таймер
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "Время вышло!";
        }
    }

    // Запускаем таймер каждую секунду
    var timerInterval = setInterval(updateTimer, 1000);

}
// button.addEventListener("click", button_hide(), timerfnc());
button.addEventListener("click", function () {
    button_hide();
    timerfnc();
});

// const { onMounted, createApp, ref } = Vue;
// createApp({
//     setup() {
//         const message = ref("Hello vue!");
//         const data = ref({
//             id: "adsadsadsadasdasd",
//             score_team_1: "0",
//             name_team_1: "Name 1",
//             score_team_2: "0",
//             name_team_2: "Name 2",
//             timer: true,
//             timer_start: "2018-25-12 23:50:55",
//             timer_end: "2018-25-12 23:50:55",
//             team_1_score_street_1: 4,
//             team_1_score_street_2: 2,
//             team_1_score_street_3: 0,
//             team_2_score_street_1: 4,
//             team_2_score_street_2: 4,
//             team_2_score_street_3: 4,
//             team_score_street_main: 2,
//         });
//         const fetchData = () => {
//             setInterval(() => {
//                 fetch("http://193.164.149.85:5000/scores").then((result) =>

//                     //fetch("http://185.68.22.42:3000/scores").then((result) =>
//                     result.json().then((res) => {
//                         data.value = res[0];
//                     })
//                 );
//             }, 500); // Обновление каждые n секунды
//         };
//         fetchData();

//         const seconds = ref(30);
//         onMounted(() => {
//             setInterval(() => {
//                 seconds.value -= 1;
//             }, 1000);
//         });
//         const minutes = ref(2);
//         onMounted(() => {
//             setInterval(() => {
//                 minutes.value -= 1;
//             }, 60000);
//         });
//         return {
//             message,
//             data,
//             seconds,
//             minutes,
//         };
//     },
// }).mount('#app')
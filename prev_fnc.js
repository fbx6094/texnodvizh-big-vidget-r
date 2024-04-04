
// console.error = function () { };
let prev = 0;
let ttx = 1;
let anybuttonclicked;
function checkScore() {
    const checkScoreInterval = setInterval(async () => {
        try {
            const response = await fetch('http://localhost:5501/check-score');
            const data = await response.text();
            // console.log(data);
            if (prev != data) {
                anybuttonclicked = false;
                // console.log("prev != data");
                // prev = data;
            }
            if (anybuttonclicked == true) {
                return 0;
            }
            if (data === prev) {
                return;
            }
            if (anybuttonclicked == false) {
                // clearInterval(checkScoreInterval);
                // anybuttonclicked = false;
                if (data === '1') {
                    anybuttonclicked = true;
                    prev = data;
                    showItogo();
                } else if (data === '0') {
                    anybuttonclicked = true;
                    // window.location.reload();
                    prev = data;
                    restart();
                    // const myButton = document.getElementById('button_state_1');
                    // myButton.click();
                } else if (data === '2') {
                    anybuttonclicked = true;
                    prev = data;
                    showwinner();
                    // const myButton = document.getElementById('rtr');
                    // myButton.click();
                } else if (data === '3') {
                    anybuttonclicked = true;
                    prev = data;
                    showloading();
                    // const myButton = document.getElementById('loading_next');
                    // myButton.click();
                }
            };
        } catch (ttx) {
            // console.log("testx");
            // console.error();
            // console.clear();

        };
    }, 500); // check every 3 seconds
};
// console.error = function () { };
let prev_timer = 0;
let timerToggled;
function checkTimer() {
    // window.fetch = require('node-fetch');
    // const checkTimerInterval = () => {
    const response = fetch('http://localhost:5500/check-timer');
    console.log('1');
    // console.log(response);
    const data_timer = response.text();
    // console.log(data_timer); 
    // timer_start_from_cpl();
    // console.log(data_timer);
    if (prev_timer != data_timer) {
        timerToggled = false;
        // console.log("prev_timer != data_timer");
        // prev_timer = data_timer;
    }
    if (timerToggled == true) {
        return 0;
    }
    if (data_timer === prev_timer) {
        return;
    }
    if (timerToggled == false) {
        // clearInterval(checkScoreInterval);
        // timerToggled = false;
        if (data_timer === '1') {
            timerToggled = true;
            prev_timer = data_timer;
            timer_start_from_cpl();
        }

        // console.clear();
        // console.error();
        // console.log("testx");
        // console.clear();
    };
}; // check every 3 seconds
// };

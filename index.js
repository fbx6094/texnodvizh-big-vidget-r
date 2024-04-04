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
const port = 5500;
opn(`http://192.168.1.110:${port}`);
const app = express();

// Use CORS middleware to allow cross-origin requests
app.use(cors());

app.get('/', (req, res) => {
    // Вывод веб-страницы с кнопками 
    res.send(`<!DOCTYPE html>
    <html>
    
    <head>
        
        <title>
            Screen
        </title>
        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            html,
            body {
                overflow: hidden;
            }
    
            .loader {
                width: 455px;
                margin: 0 auto 70px;
                border: 2px;
                border-color: black;
                position: absolute;
                display: none;
            }
    
            .loader .loading_1:before {
                z-index: 4;
                content: "";
                display: block;
                position: absolute;
                left: -30px;
                /* transform: translate(-50%); */
                border-radius: 16px;
                border-radius: 16px;
                border: 2px;
                border-color: black;
                width: 0;
                height: 61px;
                background-color: #12B72D;
                opacity: 0.8;
                animation: load 131s linear infinite;
                animation: load 131s linear infinite;
                animation-iteration-count: 1;
            }
    
            @keyframes load {
                0% {
                    width: 100%;
                }
    
                100% {
                    width: 0%;
                }
            }
    
            @keyframes bounce {
    
                0%,
                100% {
                    top: 10px;
    
                }
    
                12.5% {
                    top: 30px;
                }
            }

            #app * {
                z-index: 10;
            }
            
            .backroudn_for_titles {
                /* width: 1280px;
                height: 61px; */
                background: #0050F5;
                flex-shrink: 0;
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 100%;
                height: 61px;
            
            }
            
            .title_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                flex-shrink: 0;
                color: #FFF;
                font-family: Proxima Nova Condensed;
                font-size: 24px;
                font-style: normal;
                font-weight: 800;
                line-height: normal;
            }
            
            .title_center {
                display: flex;
                flex-direction: column;
                justify-content: center;
                flex-shrink: 0;
                color: #FFF;
                font-family: Proxima Nova Condensed;
                font-size: 24px;
                font-style: normal;
                font-weight: 800;
                line-height: normal;
            
            }
            
            .title_right {
                display: flex;
                flex-direction: column;
                justify-content: center;
                flex-shrink: 0;
                color: #FFF;
                font-family: Proxima Nova Condensed;
                font-size: 24px;
                font-style: normal;
                font-weight: 800;
                line-height: normal;
            
            }
            
            
            .main_background {
                width: 1500px;
                height: 794px;
                border-radius: 32px;
                background: #D9D9D9;
                flex-shrink: 0;
                position: absolute;
                top: 53%;
                left: 50%;
                transform: translate(-50%, -50%);
                box-shadow: 8px 8px 16px rgba(0, 0, 0, .5);
                transition: box-shadow 0.3s ease;
            
            }
            
            .team_name {
                display: flex;
                width: 421px;
                height: 20px;
                flex-direction: column;
                justify-content: center;
                flex-shrink: 0;
                color: #FFF;
                font-family: Proxima Nova Condensed;
                font-size: 48px;
                font-style: normal;
                font-weight: 800;
                line-height: normal;
                text-align: center;
            
            
            }
            
            .score_background {
                width: 430px;
                height: 130px;
                border-radius: 34px;
                background: #0050F5;
                flex-shrink: 0;
                position: absolute;
                top: 22%;
                left: 50%;
                transform: translate(-50%);
                box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
            
            
            }
            
            .timer_background {
                width: 425px;
                height: 61px;
                flex-shrink: 0;
                border-radius: 35px;
                background: #d9d9d9cd;
                position: absolute;
                /* top: 16%; */
                left: 50%;
                transform: translate(-50%);
            }
            
            .timer {
                display: flex;
                width: 732px;
                height: 89px;
                flex-direction: column;
                justify-content: center;
                flex-shrink: 0;
                color: rgba(3, 3, 3, 0.75);
                font-family: Proxima Nova Condensed;
                font-size: 40px;
                font-style: normal;
                font-weight: 800;
                line-height: normal;
                text-align: center;
                position: absolute;
                top: -19%;
                left: 50%;
                transform: translate(-50%);
            
            }
            
            .score {
                display: flex;
                width: 727px;
                height: 80px;
                flex-direction: column;
                justify-content: center;
                flex-shrink: 0;
                color: #FFF;
                font-family: Proxima Nova Condensed;
                font-size: 96px;
                font-style: normal;
                font-weight: 800;
                line-height: normal;
                text-align: center;
                position: absolute;
                top: 30%;
                left: 50%;
                transform: translate(-50%, -50%);
            
            }
            
            .houses_container {
                display: flex;
                flex-direction: column;
                align-items: center;
                row-gap: 6px;
                /* display: grid;
                grid-template-columns: repeat(3, 1fr);
                column-gap: 100px;
                row-gap: 9px; */
            
            }
            
            .house_white {
                border-radius: 6px;
                background: #ffffff;
                flex-shrink: 0;
                width: 55px;
                height: 55px;
                /* width: 30.241px;
                height: 31.845px;
                border-radius: 5px;
                background: #FFF;
                flex-shrink: 0; */
            
            }
            
            .house_green {
                /* width: 18.413px; */
                /* height: 18.34px; */
                border-radius: 5px;
                background: #12B72D;
                flex-shrink: 0;
                width: 55px;
                height: 55px;
                /* border-radius: 5px;
                background: #12B72D;
                flex-shrink: 0; */
            
            }
            
            .streets_container {
                display: flex;
                flex-direction: row;
                column-gap: 50px;
            }
            
            .street_label_container {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                column-gap: 82px;
                row-gap: 9px;
            }
            
            .street_label {
                color: rgba(114, 114, 114, 0.804);
                font-family: Proxima Nova Condensed;
                font-size: 14px;
                font-style: normal;
                font-weight: 800;
                line-height: normal;
                text-align: center;
                /* display: flex;
                flex-direction: column;
                justify-content: center;
                flex-shrink: 0;
                color: #0050F5;
                font-family: Proxima Nova Condensed;
                font-size: 10px;
                font-style: normal;
                font-weight: 700;
                line-height: normal; */
                /* text-align: center; */
            }
            
            .skysraper_container {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                row-gap: 5px;
                position: absolute;
                top: 53%;
                left: 50%;
                transform: translate(-50%);
            }
            
            .skysraper_label {
                font-family: Proxima Nova Condensed;
                color: rgba(114, 114, 114, 0.804);
                font-weight: 600;
                text-align: center;
                /* display: flex;
                width: 496.768px;
                height: 53.617px;
                transform: rotate(-0.252deg);
                flex-direction: column;
                justify-content: center;
                flex-shrink: 0;
                color: #FFF;
                font-family: Proxima Nova Condensed;
                font-size: 32px;
                font-style: normal;
                font-weight: 800;
                line-height: normal;
                text-align: center;
                position: absolute;
                top: 83%;
                left: 50%;
                transform: translate(-50%); */
            
            }
            
            .big_house_white {
                width: 70px;
                height: 64px;
                border-radius: 8px;
                background: #FFF;
                flex-shrink: 0;
            
            }
            
            .big_house_green {
            
                width: 70px;
                height: 64px;
                border-radius: 8px;
                background: #12B72D;
                flex-shrink: 0;
            }
            
            .triangle_container {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                column-gap: 90px;
            }
            
            .triangle {
                /* fill: #FFF;
                width: 39.313px;
                height: 23.884px;
                flex-shrink: 0; */
                /* border-radius: 5px; */
                /* border-left: 20px solid transparent;
                border-right: 20px solid transparent;
                border-bottom: 30px solid rgb(255, 255, 255); */
                /* position: absolute;
                top: 47.2%;
                left: 50%; */
                /* transform: translate(-50%); */
                width: 0;
                border-radius: 7px;
                height: 0;
                border-left: 30px solid transparent;
                border-right: 30px solid transparent;
                border-bottom: 50px solid rgb(255, 255, 255);
            
            
            }
            
            .triangle_green {
                /* fill: #12B72D;
                width: 39.313px;
                height: 23.884px;
                flex-shrink: 0; */
                /* border-radius: 5px;
                border-left: 20px solid transparent;
                border-right: 20px solid transparent;
                border-bottom: 30px solid #12B72D; */
                /* position: absolute;
                top: 47.2%;
                left: 50%; */
                /* transform: translate(-50%); */
                width: 0;
                height: 0;
                border-radius: 7px;
                border-left: 30px solid transparent;
                border-right: 30px solid transparent;
                border-bottom: 50px solid #12B72D;
            
            }
            
            .big_triangle {
                /* fill: #FFF;
                width: 67.979px;
                height: 36.557px;
                flex-shrink: 0; */
                /* width: 10;
                height: 10; */
                /* border-left: 35px solid transparent;
                border-right: 35px solid transparent;
                border-bottom: 50px solid rgb(255, 255, 255);
                position: absolute;
                top: 47.5%;
                left: 50%;
                transform: translate(-50%);
                border-radius: 5px; */
                width: 0;
                border-radius: 5px;
                height: 0;
                border-left: 35px solid transparent;
                border-right: 35px solid transparent;
                border-bottom: 50px solid rgb(255, 255, 255);
            }
            
            .big_triangle_green {
                /* fill: #12B72D;
                width: 67.979px;
                height: 36.557px;
                flex-shrink: 0; */
                /* border-left: 35px solid transparent;
                border-right: 35px solid transparent;
                border-bottom: 50px solid #12B72D;
                position: absolute;
                top: 47.2%;
                left: 50%;
                transform: translate(-50%);
                border-radius: 5px; */
                width: 0;
                border-radius: 5px;
                height: 0;
                border-left: 35px solid transparent;
                border-right: 35px solid transparent;
                border-bottom: 50px solid #12B72D;
            }
            
            .logo_left {
                width: 76px;
                height: 77px;
                background: url(/images/logo1.png), rgba(255, 255, 255, 0) 0% / cover no-repeat;
                flex-shrink: 0;
                position: absolute;
                top: 8%;
                left: .8%;
            
            }
            
            .logo_right {
                width: 76px;
                height: 77px;
                background: url(/images/logo2.png), rgba(255, 255, 255, 0) 0% / cover no-repeat;
                flex-shrink: 0;
                position: absolute;
                top: 8%;
                left: 96%;
            
            }
            
            .separator {
                width: 4px;
                height: 50px;
                border-radius: 6px;
                background: #ffffff;
                flex-shrink: 0;
            
            }
            
            .blue_upper_background {
                width: 1500px;
                height: 114px;
                background: #0050F5;
                flex-shrink: 0;
                position: absolute;
                top: 16.1%;
                left: 50%;
                transform: translate(-50%);
            
            }
            
            .blue_upper_background_with_curve {
                width: 1500px;
                height: 73.895px;
                border-radius: 32px;
                background: #0050F5;
                flex-shrink: 0;
                position: absolute;
                top: 11.7%;
                left: 50%;
                transform: translate(-50%);
            }
            
            .clipped_el {
                position: relative;
                /* width: 400px;
                height: 150px; */
                background: rgb(255, 0, 0);
                width: 425px;
                height: 61px;
                flex-shrink: 0;
                border-radius: 35px;
            }
            
            .clipped_el:after {
                position: absolute;
                content: '';
                /* width: 425px;
                height: 61px;
                flex-shrink: 0; */
                /* border-radius:35px; */
                width: 500px;
                height: 300px;
                background: #ffffff00;
                left: 125px;
                /* border-bottom-right-radius: 90px;
                border-bottom-left-radius: 90px; */
            }
            
            .item {
                /* clip-path: circle(213px at center); */
                clip-path: inset(0 0 0 0 round 35px);
                background: rgba(191, 191, 191, 0);
                width: 425px;
                height: 61px;
                /* background-color: red; */
                position: absolute;
                top: 15%;
                left: 50%;
                transform: translate(-50%);
            }
            
            .item_for_widing {
                color: #fff;
                padding: 12px 0px;
                width: 530px;
                word-wrap: break-word;
                font-family: Proxima Nova Condensed;
                font-size: 36px;
                font-style: normal;
                font-weight: 800;
                line-height: normal;
                white-space: normal;
                text-align: center;
                flex-shrink: 0;
            }
            
            .w-300 {
                box-sizing: border-box;
            }
            
            .table_row {
                display: flex;
                flex-direction: row;
                align-items: center;
                column-gap: 440px;
                position: absolute;
                top: 15%;
                left: 50%;
                transform: translate(-50%);
            }
            
            .grid_for_team_names {
                display: flex;
                flex-direction: column;
                width: 100%;
                position: absolute;
                top: 18.4%;
                left: 50%;
                transform: translate(-50%);
            }
            
            .area {
                background: #1219a1;
                position: absolute;
                background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
                width: 100%;
                top: 0;
                left: 0;
                height: 100%;
            }
            
            .circles {
                position: absolute;
                top: 2%;
                left: 0;
                width: 97%;
                height: 100%;
                overflow: hidden;
                z-index: 9;
            }
            
            .circles li {
                position: absolute;
                display: block;
                list-style: none;
                width: 100px;
                /* Ширина изображения шестерёнки */
                height: 100px;
                /* Высота изображения шестерёнки */
                background-image: url('imggg.png');
                /*  путь к картинки для анимации */
                background-size: cover;
                /* Растягиваем изображение на всю площадь элемента */
                animation: animate 25s linear infinite;
                bottom: -150px;
            }
            
            
            .circles li:nth-child(1) {
                left: 25%;
                width: 110px;
                height: 110px;
                animation-delay: 0s;
            }
            
            
            .circles li:nth-child(2) {
                left: 10%;
                width: 110px;
                height: 110px;
                animation-delay: 2s;
                animation-duration: 12s;
            }
            
            .circles li:nth-child(3) {
                left: 70%;
                width: 110px;
                height: 110px;
                animation-delay: 4s;
            }
            
            .circles li:nth-child(4) {
                left: 5%;
                width: 110px;
                height: 110px;
                animation-delay: 0s;
                animation-duration: 18s;
            }
            
            .circles li:nth-child(5) {
                left: 65%;
                width: 110px;
                height: 110px;
                animation-delay: 0s;
            }
            
            .circles li:nth-child(6) {
                left: 75%;
                width: 110px;
                height: 110px;
                animation-delay: 3s;
            }
            
            .circles li:nth-child(7) {
                left: 35%;
                width: 150px;
                height: 150px;
                animation-delay: 7s;
            }
            
            .circles li:nth-child(8) {
                left: 50%;
                width: 110px;
                height: 110px;
                animation-delay: 15s;
                animation-duration: 45s;
            }
            
            .circles li:nth-child(9) {
                left: 6%;
                width: 110px;
                height: 110px;
                animation-delay: 2s;
                animation-duration: 35s;
            }
            
            .circles li:nth-child(10) {
                left: 90%;
                width: 150px;
                height: 150px;
                animation-delay: 0s;
                animation-duration: 11s;
            }
            
            
            
            @keyframes animate {
            
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                    border-radius: 0;
                }
            
                100% {
                    transform: translateY(-1000px) rotate(720deg);
                    opacity: 0;
                    border-radius: 50%;
                }
            
            }
            
            .water_animation_container {
                position: relative;
                width: 100%;
                height: 0;
                overflow: hidden;
            }
            
            .water_animation_container .house_green {
                width: 100%;
                height: 25%;
                /* начальная высота, когда кубик пустой */
                background-color: green;
                /* цвет воды */
                transition: height 1s;
                /* добавляем плавное изменение высоты */
            }
            
            .Itogo {
                position: absolute;
                background-color: #1219a1;
                box-shadow: none;
                width: 79%;
                height: 90%;
                z-index: 99;
                left: 10.9%;
                top: 10%;
                transition: width 0.3s;
                border-radius: 20px;
                /* background-image: url(blue.png);
                box-shadow: inset 0 0 15px 15px rgba(0, 0, 0, 0); */
            
            }
            
            .rotating {
                animation: rotate 5s linear infinite;
                width: 20%;
                position: absolute;
                left: 40%;
                /* transform: translate(-50%); */
                top: 20%;
                /* animation-play-state: running; */
                z-index: 10000;
            }
            
            .rotating_on_loading {
                animation: rotate 5s linear infinite;
                width: 17%;
                position: absolute;
                left: 42%;
                top: 26%;
                z-index: 11001;
            }
            
            .winner_txt {
                color: #FFF;
                position: absolute;
                font-size: 50px;
                top: 55%;
                left: 51%;
                transform: translate(-50%);
                font-family: Proxima Nova Condensed;
                font-weight: 700;
                letter-spacing: 5px;
                z-index: 10000;
            }
            
            .blue_back_for_winner {
                /* background-color: red; */
                width: 40%;
                height: 60%;
                position: absolute;
                left: 30%;
                top: 22%;
                z-index: 9999;
            }
            
            .blue_back_for_loading {
                width: 50%;
                height: 65%;
                position: absolute;
                left: 30%;
                top: 22%;
                z-index: 10999;
            }
            
            .datateam2 {
                color: #FFF;
                position: absolute;
                font-size: 50px;
                top: 61%;
                left: 50.5%;
                transform: translate(-50%);
                font-family: Proxima Nova Condensed;
                font-weight: 700;
                letter-spacing: 5px;
                z-index: 10002;
                display: none;
            }
            
            .finalwinner {
                color: #FFF;
                position: absolute;
                font-size: 50px;
                top: 55%;
                left: 50.5%;
                transform: translate(-50%);
                font-family: Proxima Nova Condensed;
                font-weight: 700;
                letter-spacing: 5px;
                z-index: 10002;
                display: none;
            }
            .final_winner_score{
                color: #FFF;
                position: absolute;
                font-size: 50px;
                top: 67%;
                left: 50.5%;
                transform: translate(-50%);
                font-family: Proxima Nova Condensed;
                font-weight: 700;
                letter-spacing: 5px;
                z-index: 10002;
                display: none;
            }
            
            .koronapng {
                position: absolute;
                left: 50%;
                transform: translate(-50%);
                top: 30%;
                width: 18%;
                height: 30%;
                z-index: 10000;
            }
            
            @keyframes rotate {
                from {
                    transform: rotate(0deg);
                }
            
                to {
                    transform: rotate(360deg);
                }
            }
            
            .decision-text {
                color: #FFF;
                position: absolute;
                font-size: 50px;
                top: 55%;
                left: 51%;
                transform: translate(-50%);
                font-family: Proxima Nova Condensed;
                font-weight: 700;
                letter-spacing: 5px;
            }
            
            .decision_text_on_loading {
                color: #FFF;
                position: absolute;
                font-size: 50px;
                top: 55%;
                left: 51%;
                transform: translate(-50%);
                font-family: Proxima Nova Condensed;
                font-weight: 700;
                letter-spacing: 5px;
                z-index: 11002;
            }
            
            .item_for_widin {
                position: absolute;
                font-size: 80px;
                top: 40%;
                left: 45%;
                color: #FFF;
            
            }
            
            .circles0 {
                position: absolute;
                top: 2%;
                left: 0;
                width: 97%;
                height: 97%;
                overflow: hidden;
            }
            
            .circles0 li {
                position: absolute;
                display: block;
                list-style: none;
                width: 100px;
                /* Ширина изображения шестерёнки */
                height: 100px;
                /* Высота изображения шестерёнки */
                background-image: url('korona.png');
                /*  путь к картинки для анимации */
                background-size: cover;
                /* Растягиваем изображение на всю площадь элемента */
                animation: animate 25s linear infinite;
                bottom: -150px;
            }
            
            
            .circles0 li:nth-child(1) {
                left: 25%;
                width: 110px;
                height: 110px;
                animation-delay: 0s;
            }
            
            
            .circles0 li:nth-child(2) {
                left: 10%;
                width: 110px;
                height: 110px;
                animation-delay: 2s;
                animation-duration: 12s;
            }
            
            .circles0 li:nth-child(3) {
                left: 70%;
                width: 110px;
                height: 110px;
                animation-delay: 4s;
            }
            
            .circles0 li:nth-child(4) {
                left: 5%;
                width: 110px;
                height: 110px;
                animation-delay: 0s;
                animation-duration: 18s;
            }
            
            .circles0 li:nth-child(5) {
                left: 65%;
                width: 110px;
                height: 110px;
                animation-delay: 0s;
            }
            
            .circles0 li:nth-child(6) {
                left: 75%;
                width: 110px;
                height: 110px;
                animation-delay: 3s;
            }
            
            .circles0 li:nth-child(7) {
                left: 35%;
                width: 150px;
                height: 150px;
                animation-delay: 7s;
            }
            
            .circles0 li:nth-child(8) {
                left: 50%;
                width: 110px;
                height: 110px;
                animation-delay: 15s;
                animation-duration: 45s;
            }
            
            .circles0 li:nth-child(9) {
                left: 6%;
                width: 110px;
                height: 110px;
                animation-delay: 2s;
                animation-duration: 35s;
            }
            
            .circles0 li:nth-child(10) {
                left: 90%;
                width: 150px;
                height: 150px;
                animation-delay: 0s;
                animation-duration: 11s;
            }
            
            
            
            @keyframes animate {
            
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                    border-radius: 0;
                }
            
                100% {
                    transform: translateY(-1000px) rotate(720deg);
                    opacity: 0;
                    border-radius: 50%;
                }
            
            }
            
            .korono {
                width: 7%;
                top: 30%;
            
                text-align: center;
                position: absolute;
                left: 50%;
                transform: translate(-50%);
            }
    
            #timer {
                display: none;
            }
    
            #timeroff {
                display: none;
            }
    
            #timeroff {
                display: none;
            }
        </style>
        <script>
            // console.error = function () { };
            let prev = 0;
            let ttx = 1;
            let anybuttonclicked;
            // function checkScore() {
            //     const checkScoreInterval = setInterval(async () => {
            //         try {
            //             const response = await fetch('http://localhost:5501/check-score');
            //             const data = await response.text();
            //             // console.log(data);
            //             if (prev != data) {
            //                 anybuttonclicked = false;
            //                 // console.log("prev != data");
            //                 // prev = data;
            //             }
            //             if (anybuttonclicked == true) {
            //                 return 0;
            //             }
            //             if (data === prev) {
            //                 return;
            //             }
            //             if (anybuttonclicked == false) {
            //                 // clearInterval(checkScoreInterval);
            //                 // anybuttonclicked = false;
            //                 if (data === '1') {
            //                     anybuttonclicked = true;
            //                     prev = data;
            //                     showItogo();
            //                 } else if (data === '0') {
            //                     anybuttonclicked = true;
            //                     // window.location.reload();
            //                     prev = data;
            //                     restart();
            //                     // const myButton = document.getElementById('button_state_1');
            //                     // myButton.click();
            //                 } else if (data === '2') {
            //                     anybuttonclicked = true;
            //                     prev = data;
            //                     showwinner();
            //                     // const myButton = document.getElementById('rtr');
            //                     // myButton.click();
            //                 } else if (data === '3') {
            //                     anybuttonclicked = true;
            //                     prev = data;
            //                     showloading();
            //                     // const myButton = document.getElementById('loading_next');
            //                     // myButton.click();
            //                 }
            //             };
            //         } catch (ttx) {
            //             // console.log("testx");
            //             // console.error();
            //             // console.clear();
    
            //         };
            //     }, 500); // check every 3 seconds
            // };
            // console.error = function () { };
            let prev_timer = 0;
            let timerToggled;
            function checkTimer() {
                const checkTimerInterval = setInterval(async () => {
                    try {
                        const response = await fetch('/check-timer');
                        const data_timer = await response.text();
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
                        };
                    } catch (ttx) {
                        // console.clear();
                        // console.error();
                        // console.log("testx");
                        // console.clear();
                    };
                }, 500); // check every 3 seconds
            };
        </script>
    </head>
    
    <body style="font-family:Proxima Nova;">
        <div class="area">
            <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div class="app" id="app">
            <div class="backroudn_for_titles"></div>
            <div class="title_left" style="position: absolute; top:1.6%; left: 2%;">Робототехнический турнир “ТЕХНОДВИЖ”
                2023/2024</div>
            <div class="separator" style="position: absolute; top: .5%; left: 36.5%;"></div>
            <div class="title_center" style="position: absolute;top: 1.6%;left: 50%; transform: translate(-50%);">
                Товарищеский
                турнир ВАО</div>
            <div class="separator" style="position: absolute; top: .5%; left: 63.5%;"></div>
            <div class="title_right" style="position: absolute;top:1.6%;left: 74%;">Финал</div>
            <div class="logo_left"></div>
            <div class="logo_right"></div>
            <div class="main_background" id="mainbg"></div>
            <div class="blue_upper_background_with_curve"></div>
            <div class="score_background"></div>
            <div class="blue_upper_background"></div>
            <div class="score">{{data.score_team_1 + ":" + data.score_team_2}}</div>
            <!-- <div class="grid_for_team_names"> -->
            <div class="datateam2" id="datateam2">{{data.final_winner}}</div>
            <div class="finalwinner" id="finalwinner">Победитель</div>
            <div class="final_winner_score" id="final_winner_score">{{data.final_winner_score}}</div>
            <div class="table_row">
                <div class="item_for_widing w-300" id="button_state_1" onclick="showItogo()">{{data.name_team_1}}</div>
                <div class="item_for_widing w-300">{{data.name_team_2}}</div>
            </div>
            <div class="app" id="app">
                <audio id="sound" src="/images/snd.mp3" preload="auto"></audio>
                <div class="item">
                    <div class="timer_background">
                        <div class="loader" id="loader">
                            <div class="loading_1"></div>
                        </div>
                    </div>
                    <div class="timer">
                        <span id="startbtn" style="font-size: 35px; color: rgb(0, 0, 0);">Матч скоро начнётся!</span>
                        <span id="timeroff" style="font-size: 35px;">Время истекло!</span>
                        <h1 id="timer"
                            style=" font-weight: bold; font-size: larger; z-index: 11; position: absolute;  left: 50%; transform: translate(-50%);">
                            02:00
                        </h1>
                    </div>
                </div>
            </div>
            <div class="streets_container" style="position: absolute; top: 45%; left: 17%">
                <div class="houses_container">
                    <div :class="data.team_1_score_street_1 == '4' ? 'triangle_green': 'triangle'"></div>
                    <div class="house_white" v-for="house in 4-data.team_1_score_street_1"></div>
                    <div class="house_green" v-for="house in data.team_1_score_street_1"></div>
                    <div class="street_label">ул.Медиа</div>
                </div>
                <div class="houses_container">
                    <div :class="data.team_1_score_street_2 == '4' ? 'triangle_green': 'triangle'"></div>
                    <div class="house_white" v-for="house in 4-data.team_1_score_street_2"></div>
                    <div class="house_green" v-for="house in data.team_1_score_street_2"></div>
                    <div class="street_label">ул.Первых</div>
                </div>
                <div class="houses_container">
                    <div :class="data.team_1_score_street_3 == '4' ? 'triangle_green': 'triangle'"></div>
                    <div class="house_white" v-for="house in 4-data.team_1_score_street_3"></div>
                    <div class="house_green" v-for="house in data.team_1_score_street_3"></div>
                    <div class="street_label">ул.Истории</div>
                </div>
            </div>
    
    
            <div class="streets_container" style="position: absolute; top: 45%; left: 67%">
                <div class="houses_container">
                    <div :class="data.team_2_score_street_1 == '4' ? 'triangle_green': 'triangle'"></div>
                    <div class="house_white" v-for="house in 4-data.team_2_score_street_1"></div>
                    <div class="house_green" v-for="house in data.team_2_score_street_1"></div>
                    <div class="street_label">ул.Медиа</div>
                </div>
                <div class="houses_container">
                    <div :class="data.team_2_score_street_2 == '4' ? 'triangle_green': 'triangle'"></div>
                    <div class="house_white" v-for="house in 4-data.team_2_score_street_2"></div>
                    <div class="house_green" v-for="house in data.team_2_score_street_2"></div>
                    <div class="street_label">ул.Первых</div>
                </div>
                <div class="houses_container">
                    <div :class="data.team_2_score_street_3 == '4' ? 'triangle_green': 'triangle'"></div>
                    <div class="house_white" v-for="house in 4-data.team_2_score_street_3"></div>
                    <div class="house_green" v-for="house in data.team_2_score_street_3"></div>
                    <div class="street_label">ул.Истории</div>
                </div>
            </div>
    
    
            <div class="streets_container" style="position: absolute; top: 43%; left: 50%; transform: translate(-50%)">
                <div class="houses_container">
                    <div :class="data.team_score_street_main == '4' ? 'big_triangle_green': 'big_triangle'"></div>
                    <div class="big_house_white" v-for="house in 4-data.team_score_street_main"></div>
                    <div class="big_house_green" v-for="house in data.team_score_street_main"></div>
                    <div class="skysraper_label">НЕБОСКРЕБ</div>
                </div>
            </div>
        </div>
    
        <!-- <script src="script.js"></script> -->
    
        <!-- <script src="https://cdn.jsdelivr.net/npm/vue@2"></script> -->
        <!-- <script src="servel_call2.js"></script> -->
        <script>
            // src = 'script.js';
            //console.error = function () { };
            // setInterval(checkScore, 250);
            setInterval(checkTimer, 250);
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
                        state_of_vidget: 0,
                        final_winner_score: 0,
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
    
                    const seconds = ref(30);
                    onMounted(() => {
                        setInterval(() => {
                            seconds.value -= 1;
                        }, 1000);
                    });
                    const minutes = ref(2);
                    onMounted(() => {
                        setInterval(() => {
                            minutes.value -= 1;
                        }, 60000);
                    });
                    return {
                        message,
                        data,
                        seconds,
                        minutes,
                    };
                },
            }).mount('#app')
    
    
    
    
            //таймер авто
    
            function timer_start_from_cpl() {
                var button = document.getElementById("startbtn");
                var timer = document.getElementById("timer");
                var loader = document.getElementById("loader");
                var timerof = document.getElementById("timeroff");
                function button_hide() {
                    button.style.display = "none";
                    timer.style.display = "block";
                    loader.style.display = "block";
    
                }
                function backtostart() {
                    timerof.style.display = "none";
                    button.style.display = "block";
                }
                function timeroff() {
                    timerof.style.display = 'block';
                    timer.style.display = 'none';
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
                            playSound1();
                            // timerElement.textContent = "Время вышло!";
                            timeroff();
                        }
                    }
    
                    // Запускаем таймер каждую секунду
                    var timerInterval = setInterval(updateTimer, 1000);
    
                }
                function playSound1() {
                    const audio = document.getElementById('sound');
                    audio.play();
                }
                // button.addEventListener("click", button_hide(), timerfnc());
    
                playSound1();
                // setTimeout(() => {
                //     console.log("After 500 milliseconds");
                // }, 500);
                button_hide();
                timerfnc();
    
            }
            //console.error = function () { };
    
    
            //таймер вручную
    
            var button = document.getElementById("startbtn");
            var timer = document.getElementById("timer");
            var loader = document.getElementById("loader");
            var timerof = document.getElementById("timeroff");
    
            function button_hide() {
                button.style.display = "none";
                timer.style.display = "block";
                loader.style.display = "block";
    
            }
            function backtostart() {
                timerof.style.display = "none";
                button.style.display = "block";
            }
            function timeroff() {
                timerof.style.display = 'block';
                timer.style.display = 'none';
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
                        playSound1();
                        // timerElement.textContent = "Время вышло!";
                        timeroff();
                    }
                }
    
                // Запускаем таймер каждую секунду
                var timerInterval = setInterval(updateTimer, 1000);
    
            }
            function playSound1() {
                const audio = document.getElementById('sound');
                audio.play();
            }
            // button.addEventListener("click", button_hide(), timerfnc());
            button.addEventListener("click", function () {
                // button_hide();
                // timerfnc();
                // playSound1();
                timer_start_from_cpl();
            });
    
            class Itogo {
                constructor(teamName) {
                    this.teamName = teamName;
                    this.container = document.createElement('div');
                    this.container.className = 'Itogo';
    
                    // Создаем элемент img
                    this.image = document.createElement('img');
                    this.image.src = 'imggg.png';
                    this.image.className = 'rotating';
                    this.image.id = 'rtr'; // Добавляем класс для анимации
    
                    // Добавляем обработчик события для перехода на другую страницу при клике на изображение
                    this.image.onclick = function () {
                        // window.location.href = 'index2.html';
    
                        showwinner();
                    };
                }
    
                show() {
                    var mainbg = document.getElementsByClassName("main_background");
                    // mainbg.style.boxShadow = 'none';
                    // Добавляем изображение в контейнер
                    this.container.appendChild(this.image);
    
                    // Добавляем текст "Судьи принимают решение..."
                    var decisionText = document.createElement('div');
                    decisionText.innerText = 'Судьи принимают решение...';
                    decisionText.className = 'decision-text'; // Добавляем класс для текста
                    this.container.appendChild(decisionText);
    
                    // Добавляем текст с названием команды
                    var teamText = document.createElement('div');
                    this.container.appendChild(teamText);
    
                    // Добавьте дополнительные элементы или логику по необходимости
    
                    // Добавляем контейнер в тело документа
                    document.body.appendChild(this.container);
                }
            }
            function showItogo() {
                var main_back = document.getElementById("mainbg");
                main_back.style.boxShadow = "none";
    
                // var circles = document.getElementsByClassName("circles");
                // circles.style.zIndex = 11004;
                var circles = document.querySelectorAll('.circles');
    
                // Set the z-index property of each element
                for (var i = 0; i < circles.length; i++) {
                    circles[i].style.zIndex = 99; // You can replace 1000 with any integer value
                }
    
                // Создаем объект класса Itogo
                var itogoInstance = new Itogo();
                buttonClicked = false;
                // Обработка нажатия кнопки
    
                // Вызываем метод show() для отображения Itogo
                itogoInstance.show();
    
            }
            function showwinner() {
                var circles = document.querySelectorAll('.circles li');
                for (var i = 0; i < circles.length; i++) {
                    circles[i].style.backgroundImage = 'url("korona.png")';
                }
                this.image = document.createElement('img');
                this.image.src = 'blue.png';
                this.image.className = 'blue_back_for_winner';
                this.image.id = 'loading_next';
                document.body.appendChild(this.image);
                this.image = document.createElement('img');
                this.image.src = 'korona.png';
                this.image.className = 'koronapng';
                document.body.appendChild(this.image);
                var data2 = document.getElementById("datateam2");
                data2.style.display = "block";
                document.body.appendChild(data2);
                var final_winner_score_lbl = document.getElementById("final_winner_score");
                final_winner_score_lbl.style.display = 'block';
                document.body.appendChild(final_winner_score_lbl);
                var winnlabel = document.getElementById("finalwinner");
                winnlabel.style.display = "block";
                document.body.appendChild(winnlabel);
                buttonClicked = false;
                this.image.onclick = function () {
                    showloading()
                }
    
            }
            function showloading() {
                this.image = document.createElement('img');
                buttonClicked = false;
                this.image.src = 'blue.png';
                this.image.className = 'blue_back_for_loading';
                document.body.appendChild(this.image);
                this.image = document.createElement('img');
                this.image.src = 'korona.png';
                this.image.className = 'koronapng';
                document.body.appendChild(this.image);
                this.image1 = document.createElement('img');
                this.image1.src = 'imggg.png';
                this.image1.className = 'rotating_on_loading';
                this.image1.id = 'rtr';
                // this.image1.addEventListener('click', function ())        
                // }
                this.image1.onclick = function () {
                    restart();
                }
                document.body.appendChild(this.image1)
                var decisionText = document.createElement('div');
                decisionText.innerText = 'Следующий матч скоро начнётся...';
                decisionText.className = 'decision_text_on_loading'; // Добавляем класс для текста
                document.body.appendChild(decisionText);
                var circles = document.querySelectorAll('.circles li');
                for (var i = 0; i < circles.length; i++) {
                    circles[i].style.backgroundImage = 'url("imggg.png")';
                }
                // var data2 = document.getElementById("datateam2");
                // data2.style.display = "block";
                // document.body.appendChild(data2);
                // var winnlabel = document.getElementById("finalwinner");
                // winnlabel.style.display = "block";
                // document.body.appendChild(winnlabel);
            }
            function restart() {
                window.location.reload();
            }
    
        </script>
    
    </body>
    
    </html>`);
});

app.get('/check-timer', async (req, res) => {
    console.error =function(){};
    try {
        const result = await pool.query('SELECT progress_bar_state FROM score WHERE id = 1');
        const stateOfTimer = result.rows[0].progress_bar_state;
        res.send(`${stateOfTimer}`);
    } catch (err) {
        // console.error(err);
        // res.status(500).send('Internal Server Error');
    }
});


app.listen(port, () => {
    console.log(`http://localhost:${port}/check-timer`);
});
``

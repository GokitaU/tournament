// Программа для подсчета баллов за матчи
document.addEventListener('DOMContentLoaded', function() {

    let everyHead = document.querySelectorAll('.head img');
    // показываем, кто оставил прогноз
    if (localStorage.getItem('lev')) {
        everyHead[0].src = '../img/season/Lev_light_head.png';
    }
    if (localStorage.getItem('tit')) {
        everyHead[1].src = '../img/season/Tit_light_head.png';
    }
    if (localStorage.getItem('ryk')) {
        everyHead[2].src = '../img/season/Ryk_light_head.png';
    }
    if (localStorage.getItem('pas')) {
        everyHead[3].src = '../img/season/Pas_light_head.png';
    }

    let form = document.querySelector('form');
    let LevIncome = localStorage.getItem('lev'),
        RykIncome = localStorage.getItem('ryk'),
        TitIncome = localStorage.getItem('tit'),
        PasIncome = localStorage.getItem('pas'),
        resWeek = document.querySelectorAll('.week_result'),
        resAll = document.querySelectorAll('.season_result'),
        names = document.querySelectorAll('.name');    


    let allRes = { //Текущая таблица результатов - весь сезон
        Lev: 10,
        Ryk: 20,
        Tit: 30,
        Pas: 40
    };


    // меняем имена
    function setNames() {
        names[0].textContent = localStorage.getItem('levName');
        names[1].textContent = localStorage.getItem('titName');
        names[2].textContent = localStorage.getItem('pasName');
        names[3].textContent = localStorage.getItem('rykName');
    }
    setNames();
    // запускаем рассчеты
    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        let weekRes = {
            Lev: 0,
            Ryk: 0,
            Tit: 0,
            Pas: 0
        }
        let gamesIncome = document.querySelectorAll('form input')[1].value;
        let gamesResults = [], LevResults = [], RykResults = [], TitResults = [], PasResults = [];
    
            //переводим строки в массив массивов
            function income() { 
                arr = gamesIncome.split(" ");
                    for (let i = 0; i<arr.length; ++i) {
                    gamesResults.push(gamesIncome.split(" ")[i].split(""));
                    LevResults.push(LevIncome.split(" ")[i].split(""));
                    RykResults.push(RykIncome.split(" ")[i].split(""));
                    TitResults.push(TitIncome.split(" ")[i].split(""));
                    PasResults.push(PasIncome.split(" ")[i].split(""));
                    }
            };
            income(); //Запуск перевода
            console.log('массив результатов игр ' + gamesResults);
            console.log('массив прогнозов Коли' + LevResults);
            function pointsCalc(player, real = gamesResults) { //Считает баллы за матчи
            let weekPoints = 0;
                for (let i = 0; i<real.length ; ++i) {
                    let realDif = real[i][0] - real[i][1],
                        playerDif = player[i][0] - player[i][1];
                    if (isNaN(realDif) || isNaN(playerDif)) {
                        weekPoints += 0;
                    } else if (real[i].toString() == player[i].toString()) {
                        weekPoints += 3;
                    } else if ((realDif) == (playerDif)) {
                        weekPoints += 2;
                    } else if (Math.sign(realDif) == Math.sign(playerDif)) {
                        weekPoints += 1;
                    }
                }
                return weekPoints;
            };
            
            function setResults() {
                resWeek[0].textContent = weekRes.Lev;
                resWeek[1].textContent = weekRes.Ryk;
                resWeek[2].textContent = weekRes.Pas;
                resWeek[3].textContent = weekRes.Tit;
        
                resAll[0].textContent = allRes.Lev;
                resAll[1].textContent = allRes.Ryk;
                resAll[2].textContent = allRes.Pas;
                resAll[3].textContent = allRes.Tit;
                console.log('баллы за сезон у Коли' + allRes.Lev);
                console.log('баллы за неделю у Коли' + weekRes.Lev);
            }
        
            function calcAll () { // запуск рассчетов

                let LevWeek = function() { //замыкания - рассчеты для всех
                    allRes.Lev += pointsCalc(LevResults),
                    weekRes.Lev = pointsCalc(LevResults);
                    },
                    RykWeek = function() {
                    allRes.Ryk += pointsCalc (RykResults),
                    weekRes.Ryk = pointsCalc (RykResults);
                    },
                    TitWeek = function() {
                    allRes.Tit += pointsCalc (TitResults),
                    weekRes.Tit = pointsCalc (TitResults);
                    },
                    PasWeek = function() {
                    allRes.Pas += pointsCalc (PasResults),
                    weekRes.Pas = pointsCalc (PasResults);
                    };
                LevWeek(), RykWeek(), TitWeek(), PasWeek();
                setResults();
            }


            calcAll(); // Запуск проги
            
            localStorage.setItem('week', JSON.stringify(weekRes));
            localStorage.setItem('season', JSON.stringify(allRes));
    });

});
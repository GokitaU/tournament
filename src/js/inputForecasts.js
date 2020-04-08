document.addEventListener('DOMContentLoaded', ()=> {
 // form inputs
    // конструктор игроков
    class Player {
        constructor(name, realName, newName) {
        this.active = false;
        this.clicked = false;
        this.realName = realName;
        this.name = name;
        this.forecast = '';
        this.newName = newName;
        }
    }
    // создаем игроков
    let lev = new Player('Коля', 'lev', 'levName'),
        tit = new Player('Вовка', 'tit', 'titName'),
        ryk = new Player('Женька', 'ryk', 'rykName'),
        pas = new Player('Володя', 'pas', 'pasName');
    let players = [lev, tit, ryk, pas];
    let everyHead = document.querySelectorAll('.head img');
    // Отображения голов
    function levActive() {
        if (!lev.active) {
            everyHead[0].src = '../img/season/Lev_dark_head.png';}
            else {
            everyHead[0].src = "../img/season/Lev_light_head.png";
            }
    }
    function titActive() {
        if (!tit.active) {
            everyHead[1].src = '../img/season/Tit_dark_head.png';}
            else {
            everyHead[1].src = '../img/season/Tit_light_head.png';
            }
    }
    function rykActive() {
        if (!ryk.active) {
            everyHead[2].src = '../img/season/Ryk_dark_head.png';}
            else {
            everyHead[2].src = '../img/season/Ryk_light_head.png';
            }
    }
    function pasActive() {
        if (!pas.active) {
            everyHead[3].src = '../img/season/Pas_dark_head.png';}
            else {
            everyHead[3].src = '../img/season/Pas_light_head.png';
            } 
    }
    function allActive() {
        pasActive();
        titActive();
        levActive();
        rykActive();
    }
    everyHead.forEach( (item) => {

        item.addEventListener('mouseover', (event)=> {
            switch (event.target) {
                case everyHead[0]:
                    lev.active = true;
                    levActive();
                    break;
                case everyHead[1]:
                    tit.active = true;
                    titActive();
                    break;
                case everyHead[2]:
                    ryk.active = true;
                    rykActive();
                    break;
                case everyHead[3]:
                    pas.active = true;
                    pasActive();
                    break;
            }
        });

        item.addEventListener('click', (event) => {
            switch (event.target) {
                case everyHead[0]:
                    tit.active = tit.clicked = ryk.active = 
                    ryk.clicked = pas.active = pas.clicked = false;
                    lev.active = lev.clicked = true;
                    allActive();
                break;
                case everyHead[1]:
                    ryk.active = ryk.clicked = pas.active =
                    pas.clicked = lev.active = lev.clicked = false;
                    tit.active = tit.clicked = true;
                    allActive();
                break;
                case everyHead[2]:
                    tit.active = tit.clicked = pas.active = 
                    pas.clicked = lev.active = lev.clicked = false;
                    ryk.active = ryk.clicked = true;
                    allActive();
                break;
                case everyHead[3]:
                    tit.active = tit.clicked = ryk.active =
                    ryk.clicked = lev.active = lev.clicked = false;
                    pas.active = pas.clicked = true;
                    allActive();
                break;
            }
        });


        item.addEventListener('mouseleave', (event) => {
            switch (event.target) {
                case everyHead[0]:
                    if (!lev.clicked) {
                        lev.active = false;
                        levActive();}
                    break;
                case everyHead[1]:
                    if (!tit.clicked) {
                        tit.active = false;
                        titActive();}
                    break;
                case everyHead[2]:
                    if (!ryk.clicked) {
                        ryk.active = false;
                        rykActive();}
                    break;
                case everyHead[3]:
                    if (!pas.clicked) {
                        pas.active = false;
                        pasActive();}
                    break;
            }
        });
          
    });

    // Заносим имена и прогнозы
    let form = document.querySelector('.write_results .container form'),
        input = document.querySelectorAll('.write_results .container form input'),
        mark = document.querySelectorAll('.heads .head span');
    form.addEventListener('submit', (e)=> {
        players.forEach((player)=> {
            if (player.clicked && localStorage.getItem(player.realName)) {
                alert('Уцик, ты уже отправил прогноз!');
            }
            if (player.active && !localStorage.getItem(player.realName)) {
                player.name = input[0].value;
                player.forecast = input[1].value;
                localStorage.setItem(player.realName, player.forecast);
                localStorage.setItem(player.newName, player.name);
            }
        });
        if (input[0].value === 'admin' && input[1].value === 'admin') {
            document.location.href = 'admin.html';
        }
        input[0].value = '';
        input[1].value = '';
        e.preventDefault();
    });

    // ставим галки
    players.forEach((player, index)=> {
        if (localStorage.getItem(player.realName)) {
            mark[index].style.display = 'block';
        }
    });

});
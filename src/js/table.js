document.addEventListener('DOMContentLoaded', ()=> {
let resWeek = document.querySelectorAll('.week_result'),
    resAll = document.querySelectorAll('.season_result'),
    names = document.querySelectorAll('.name'),
    season = JSON.parse(localStorage.getItem('season')),
    week = JSON.parse(localStorage.getItem('week'));

    function setNames() {
        names[0].textContent = localStorage.getItem('levName');
        names[1].textContent = localStorage.getItem('titName');
        names[2].textContent = localStorage.getItem('pasName');
        names[3].textContent = localStorage.getItem('rykName');
    }
    setNames();
    function setResults () {
        resWeek[0].textContent = week.Lev;
        resWeek[1].textContent = week.Rek;
        resWeek[2].textContent = week.Tit;
        resWeek[3].textContent = week.Pas;

        resAll[0].textContent = season.Lev;
        resAll[1].textContent = season.Rek;
        resAll[2].textContent = season.Tit;
        resAll[3].textContent = season.Pas;
    }
    setResults();
});
document.addEventListener('DOMContentLoaded', function() {
    let historySub = document.querySelector('.history_submenu'),
        historyHead = document.querySelectorAll('.history_head')[1],
        arrow = document.querySelector('.arrow'),
        lines = document.querySelector('.lines'),
        line = document.querySelectorAll('.line'),
        mobileMenu = document.querySelector('.mobile_menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        seasons = document.querySelectorAll('.seasons');

    historyHead.addEventListener('mouseover', function () {
        historySub.style.display = 'flex';
        arrow.style.transform = 'rotate(180deg)';
        arrow.style.transitionDuration = '0.5s';
    })
    historySub.addEventListener('mouseout', function () {
        historySub.style.display = 'none';
        arrow.style.transform = 'rotate(360deg)';
        arrow.style.transitionDuration = '0.5s';
    })

    lines.addEventListener('click', function () {
        mobileMenu.classList.toggle('mobile_menu_active');
        lines.classList.toggle('line_active');
    })
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            lines.classList.toggle('line_active');
            mobileMenu.classList.toggle('mobile_menu_active');
        })
    })
    seasons.forEach(item => {
        item.addEventListener ('click', () => {
                item.classList.toggle('season_active');
        })
    })
});
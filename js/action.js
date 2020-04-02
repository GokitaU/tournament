let historySub = document.querySelector('.history_submenu'),
    historyHead = document.querySelectorAll('.history_head')[1],
    arrow = document.querySelector('.arrow'),
    lines = document.querySelector('.lines'),
    line = document.querySelectorAll('.line'),
    mobileMenu = document.querySelector('.mobile_menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    seasons = document.querySelectorAll('.seasons');


let isClicked = false;

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

// SLIDER
{
    let images = ['/img/history/seasons/slider/осень_2018_3.jpg', '/img/history/seasons/slider/весна_2017.jpg',
     '/img/history/seasons/slider/весна_2019.jpg', '/img/history/seasons/slider/весна_2019_2.jpg',
    '/img/history/seasons/slider/весна_2020_2.jpg', '/img/history/seasons/slider/евро_2016.jpg', 
    '/img/history/seasons/slider/осень_2018.jpg', '/img/history/seasons/slider/осень_2018_2.jpg',
    '/img/history/seasons/slider/весна_2016.jpg', '/img/history/seasons/slider/осень_2019.jpg',
    '/img/history/seasons/slider/осень_2019_2.jpg', '/img/history/seasons/slider/осень_2019_3.jpg',
    '/img/history/seasons/slider/ЧМ_2018.jpg', '/img/history/seasons/slider/ЧМ_2018_2.jpg'],
        i = 0;
    function changeImg() {
        document.slider.src = images[i];  
        if ( i< images.length - 1) {
            i++;
        } else {
            i = 0;
        }
        setTimeout('changeImg()', 3000);
    }
}
window.onload = changeImg;

//FUN typewriter

class TypeWriter {
    constructor (txtElement, words, wait = 2000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    type() {
        // current index of word
    const current = this.wordIndex % this.words.length;
    // get full text of current word
        const fulltxt = this.words[current];
    //check if deleting
        if (this.isDeleting) {
            //remove char
            this.txt = fulltxt.substring(0, this.txt.length -1);
    
        } else {
            //add char
            this.txt = fulltxt.substring(0, this.txt.length +1);
        }
        // insert txt into element
        this.txtElement.innerHTML = `<span class = "txt">${this.txt}</span>`;
        //initial type speed
        let typeSpeed = 300;
        if(this.isDeleting) {
            typeSpeed /= 2;
        }
        // check if the word is complete
        if(!this.isDeleting && this.txt === fulltxt) {
            //make a pause at the end
            typeSpeed = this.wait;
            //set delete to true
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // move to the next word
            this.wordIndex++;
            // pause before start typing
            typeSpeed = 500;
        }
        // run every .5s method this.type for each letter
        setTimeout(()=> this.type(), typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded', init);
//Init app
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
}
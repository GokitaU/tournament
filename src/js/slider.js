window.addEventListener('DOMContentLoaded', function() { 
let images = ['/img/history/seasons/slider/осень_2018_3.jpg', '/img/history/seasons/slider/весна_2017.jpg',
'/img/history/seasons/slider/весна_2019.jpg', '/img/history/seasons/slider/весна_2019_2.jpg',
'/img/history/seasons/slider/весна_2020_2.jpg', '/img/history/seasons/slider/евро_2016.jpg', 
'/img/history/seasons/slider/осень_2018.jpg', '/img/history/seasons/slider/осень_2018_2.jpg',
'/img/history/seasons/slider/весна_2016.jpg', '/img/history/seasons/slider/осень_2019.jpg',
'/img/history/seasons/slider/осень_2019_2.jpg', '/img/history/seasons/slider/осень_2019_3.jpg',
'/img/history/seasons/slider/ЧМ_2018.jpg', '/img/history/seasons/slider/ЧМ_2018_2.jpg'];
let i = 0;
function changeImg() {
   document.slider.src = images[i];  
   if ( i< images.length - 1) {
       i++;
   } else {
       i = 0;
   }
   setTimeout(changeImg, 3000);
}
changeImg();
});
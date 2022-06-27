'use strict';

const images = document.querySelectorAll("img");

let index = 0;
setInterval(() => {
    index++;
    if(index >= images.length){
        index = 0;
    }
    images.forEach(image => {
        image.style.transform = `translateX(-${index * 500}px)`;
    });
}, 1500);
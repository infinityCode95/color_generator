"use strict";

const body = document.querySelector('body');
const btn = document.querySelector('.switch__btn');
const spanColor = document.querySelector('.switch__span');

const colors = ['#d1b0b0', '#4d4949', '#d45353', '#6da673', '#a66d9c', '#fab01b', '#46e8e8', '#2b578a', '#ff70e7', '#de8e34f'];

const getRandomNumber = () => {
     return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', () => {
    
    const randomNumber = getRandomNumber();

    body.style.backgroundColor = colors[randomNumber];
    spanColor.innerHTML = colors[randomNumber];
    spanColor.style.color = colors[randomNumber];

});
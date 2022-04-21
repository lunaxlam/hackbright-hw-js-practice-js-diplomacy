'use strict';

// Color Changer Function

function changeColor () {
    // Change the color to red when the 'color-changer' button is clicked //

     const changeEl = document.querySelectorAll('.color-change');

     for (const el of changeEl) {
        el.classList.add('red');
     }
}

// Event Handler for Color Changer Function
document.querySelector(('.color-changer')).addEventListener('click', changeColor);
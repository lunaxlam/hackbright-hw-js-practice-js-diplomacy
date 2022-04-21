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
document.querySelector('.color-changer').addEventListener('click', changeColor);


// Validate Text Input Function

function validateText(evt) {
    evt.preventDefault()

    const formFeedback = document.querySelector('#formFeedback');

    // Validate the input in the text input with id=number-input
    const input = Number(document.querySelector('#number-input').value);
    console.log('Input', input)
    console.log('Type of', typeof 'input')
    // If input is not a number or >= 10, change element with id=formFeedback
    // to say 'Please enter a smaller number'.
    // Otherwise, change text to 'You are good to go!'
    if (isNaN(input) || input >=10 ){
        formFeedback.innerHTML = 'Please enter a smaller number';
    } else {
        formFeedback.innerHTML = 'You are good to go!';
    }
}

// Event Handler for Validate Text Input Function
document.querySelector('input[type="submit"]').addEventListener('click', validateText);
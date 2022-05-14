console.log('Validate!');
//WIGGLE
//Grab dom elements with getElementById, define with const
//input - date input - title input - type display - input
const dateIn = document.getElementById('input-date');
//const typeIn = document.getElementById('input-type');
const titleIn = document.getElementById('input-title');
const displayIn = document.getElementById('display-input');
const buttonSubmit = document.getElementById('click-submit')

//console.log(dateIn, titleIn, displayIn, buttonSubmit);
//this is how we validate/check that we input all the elements

//belief that i grabbed dom elements, test by looking at console on website
//We left off at 1:23:15 on the zoom video

buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    const dateInput = dateIn.value;
    //const typeInput = typeIn.value;
    const titleInput = titleIn.value;
    //daysUntil = "days until"
    //punctuation = "!"
    const displayString = "".concat(dateInput, " days until", " ", titleInput, "!");
    displayIn.textContent = displayString;
})
// buttonSubmit.addEventListener('click', (event) => {
//     event.preventDefault();
//     const userInput = typeIn.value;
//     displayIn.textContent = userInput;
// })
// buttonSubmit.addEventListener('click', (event) const userInput = titleIn.value;=> {
//     event.preventDefault();
//     const userInput = titleIn.value;
//     displayIn.textContent = userInput;
// })
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

    var numberOfDays = dateDifference(dateIn.value);
    //you define a series of steps by creating a function which is a reuseable set of instructions, you call it to get the values (days, hours seconds)
    //const typeInput = typeIn.value;
    const titleInput = titleIn.value;

    const displayString = "".concat(numberOfDays, " days until", " ", titleInput, "!");

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

// get total seconds between the times
//var delta = Math.abs(date_future - date_now) / 1000;
function dateDifference(dateInput) {
    var dateNow = Math.floor(Date.now() / 1000);

    var dateFuture = new Date(dateInput);

    dateFuture = Math.floor(dateFuture.getTime() / 1000);

    var delta = Math.abs(dateFuture - dateNow);

    var days = Math.floor(delta / 86400);

    delta -= days * 86400;

    var hours = Math.floor(delta / 3600) % 24;

    delta -= hours * 3600;

    var minutes = Math.floor(delta / 60) % 60;

    delta -= minutes * 60;

    return days;
}

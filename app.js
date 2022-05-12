console.log('Hello World')
const clickMe = document.getElementById('click-me')
//This is called an anonymous function = () =>
//Function allows us to group together a block of code by a name
clickMe.addEventListener("click", () => {
    alert("The countdown has begun!");
});
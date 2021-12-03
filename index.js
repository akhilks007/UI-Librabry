///////Tooltip///////
// Object for accessing tooltip
const Tooltip = new tooltip(document.querySelector('.tooltip'));
Tooltip.init();

///////Dropdown///////
const dropdowns = document.querySelectorAll('.dropdown');  //query selector for getting reference to all the divs having class= "dropdown"

dropdowns.forEach(ddown =>{
    // Object for accessing fo each tooltip
    const obj = new dropdown(ddown);
    obj.init();
});

////////Tabs///////
const Tabs = document.querySelector('.tabs');
const objtab = new tabs(Tabs);
objtab.init();

///////////Snackbar/////////
const Snack = document.querySelector('button');
const objsnack = new snackbar(Snack);

Snack.addEventListener('click', () => {
    objsnack.init();
    objsnack.show("You click me!");
});
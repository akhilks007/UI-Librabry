///////Tooltip///////
// Object for accessing tooltip
const Tooltip = new tooltip(document.querySelector('.tooltip'));
Tooltip.init();

///////dropdown///////
const dropdowns = document.querySelectorAll('.dropdown');  //query selector for getting reference to all the divs having class= "dropdown"

dropdowns.forEach(ddown =>{
    // Object for accessing fo each tooltip
    const obj = new dropdown(ddown);
    obj.init();
});
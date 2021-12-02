//class for operating on dropdown
class dropdown {
    constructor (dropdowns){
        this.dropdowns = dropdowns;   //getting reference to dropdown div
        this.trigger = dropdowns.querySelector('.trigger');  //getting reference to trigger element in dropdown div
        this.content = dropdowns.querySelector('.content');  //getting reference to content element in dropdown div
    }
    init(){
        //event listener to add and remove class = "active" to the trigger and content elements
        this.trigger.addEventListener('click', () => {
            this.trigger.classList.toggle('active');
            this.content.classList.toggle('active');
        });
    }
}
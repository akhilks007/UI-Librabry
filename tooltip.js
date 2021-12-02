//class for operating on tooltip
class tooltip{
    constructor (element){
        this.element = element;   //getting reference to tooltip html elemet
        this.message = element.getAttribute('data-message');  //getting the message from data-message attribute
    }
    init(){
        const tip = document.createElement('div');  //create a new div tag
        tip.classList.add('tip');   //Adding class = "tip" to the created div for styling it 
        tip.textContent = this.message;  //Adding content to the new div
        this.element.appendChild(tip);  //appending it with the span tag

        //event listener for adding class = "active" on the new div
        this.element.addEventListener('mouseenter', () => {
            tip.classList.add('active');
        });

        //event listener for removing class = "active" on the new div
        this.element.addEventListener('mouseleave', () => {
            tip.classList.remove('active');
        });
    }
}
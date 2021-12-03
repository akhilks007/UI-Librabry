// class for accessing tabs
class tabs{
    constructor (container){
        this.container = container; //getting refference to tabs container
        this.triggers = container.querySelectorAll(".trigger"); //getting refference to li tags in tabs container
    }

    // for highlighting the clicked tab
    toggletabs(e){
        this.triggers.forEach(trig => {
            trig.classList.remove('active');  //Removing currently active tab
        });
        e.target.classList.add('active'); //Highlighting clicked tab
    }

    togglecontent(e){
        this.container.querySelectorAll('.content').forEach(content => {
            content.classList.remove('active');   //Removing currently active content
        });
        const target_data = document.querySelector(e.target.getAttribute('data-target'));
        target_data.classList.add('active');   //Showing clicked tab content
    }

    // event listneres for each tabs
    init(){
        this.triggers.forEach(tab => {
            tab.addEventListener('click', e => {
                this.toggletabs(e);
                this.togglecontent(e);
            });
        });
    }
}
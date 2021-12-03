//class for snackbar
class snackbar {
    constructor() {
        this.snack = document.createElement('div'); //creating a ne tag for snackbar
    }

    init(){
        this.snack.classList.add('snackbar');  //Adding class snackbar to newly crated div tag
        document.querySelector('body').appendChild(this.snack);  // Appending the newly created snackbar div to body
    }

    show(message){
        this.snack.textContent = message;  //Adding text contendts to snackbar div
        this.snack.classList.add('active');  //Making it visible

        setTimeout(() => {
            this.snack.classList.remove('active');
        }, 4000);  //snackbar disapears after 4 seconds
    }
}
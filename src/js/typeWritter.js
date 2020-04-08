//FUN typewriter
window.addEventListener('DOMContentLoaded', function() {
class TypeWriter {
    constructor (txtElement, words, wait = 2000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    type() {
        // current index of word
    const current = this.wordIndex % this.words.length;
    // get full text of current word
        const fulltxt = this.words[current];
    //check if deleting
        if (this.isDeleting) {
            //remove char
            this.txt = fulltxt.substring(0, this.txt.length -1);
    
        } else {
            //add char
            this.txt = fulltxt.substring(0, this.txt.length +1);
        }
        // insert txt into element
        this.txtElement.innerHTML = `<span class = "txt">${this.txt}</span>`;
        //initial type speed
        let typeSpeed = 300;
        if(this.isDeleting) {
            typeSpeed /= 2;
        }
        // check if the word is complete
        if(!this.isDeleting && this.txt === fulltxt) {
            //make a pause at the end
            typeSpeed = this.wait;
            //set delete to true
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // move to the next word
            this.wordIndex++;
            // pause before start typing
            typeSpeed = 500;
        }
        // run every .5s method this.type for each letter
        setTimeout(()=> this.type(), typeSpeed);
    }
}

//Init app
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
}
init();
});
class Contact {
    constructor(element) {
        this.element = element;
        this.contactButton = this.element.querySelector('button');
        this.card = this.element.querySelector('.card')

        this.contactButton.addEventListener('click', this.cardFlip.bind(this));
    }

    cardFlip() {
        if(this.card.classList.contains('is-flipped')) {
            this.card.classList.remove('is-flipped')
            this.contactButton.textContent = 'Contact Me!' 
        } else {
            this.card.classList.add('is-flipped');
            this.contactButton.textContent = 'Go back' 
        }
    }
}



let contacts = document.querySelectorAll('.info').forEach( contact => new Contact(contact));
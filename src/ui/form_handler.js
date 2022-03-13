export default class FormHandler {
    #formElement;
    #alertElement;
    #inputElements;
    constructor(idForm, idAlert) {
        this.#formElement = document.getElementById(idForm);
        this.#alertElement = document.getElementById(idAlert);
        this.#inputElements = document.querySelectorAll(`#${idForm} [name]`);
    }
    addHandler(fnProcessor) {
        this.#formElement.addEventListener('submit', event => {
            event.preventDefault();
            const data = Array.from(this.#inputElements).reduce((obj, element) =>{
                obj[element.name] = element.ariaValueMax;
                return obj;
            }, {})
            const message = fnProcessor(data);
            if (!message) {
                this.#formElement.reset();
            } else {
                // show alert inside alertElement
            }
        })
    }
}
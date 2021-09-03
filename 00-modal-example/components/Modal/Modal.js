import { template } from './template.js';

class Modal extends HTMLElement
{
    constructor()
    {
        super();
        this._modalVisible = false;
        this._modal;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = template;
    }

    set title(value)
    {
        this.shadowRoot.querySelector("#header-title").innerText = value;
    }

    set message(value)
    {
        this.shadowRoot.querySelector(".modal-body").innerText = value;
    }

    set initButton(value)
    {
        if(value instanceof HTMLButtonElement)
        {
            this.shadowRoot.appendChild(value);
        }
        else
        {
            console.log("¡"+value.constructor.name+" is not HTMLButtonElement!");
        }
    }

    connectedCallback()
    {
        /*SELECT THE MODAL CLASS CSS AND ADD EVENT LISTENERS*/
        this._modal = this.shadowRoot.querySelector(".modal");
        this.shadowRoot.querySelector("button").addEventListener('click', this._showModal.bind(this));
        this.shadowRoot.querySelector(".close").addEventListener('click', this._hideModal.bind(this));
    }

    disconnectedCallback()
    {
        this.shadowRoot.querySelector("button").removeEventListener('click', this._showModal);
        this.shadowRoot.querySelector(".close").removeEventListener('click', this._hideModal);
    }

    _showModal()
    {
        this._modalVisible = true;
        this._modal.style.display = 'block';
    }

    _hideModal()
    {
        this._modalVisible = false;
        this._modal.style.display = 'none';
    }
}

//registration
customElements.define('wc-modal',Modal);

//export module
export { Modal };

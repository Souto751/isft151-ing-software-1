import { template } from './template.js';

class Button extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = template;
    }

    set caption(value)
    {
        this.shadowRoot.querySelector("button").innerText = value;
    }

    set tooltip(value)
    {
        this.shadowRoot.querySelector("button").title = value;
    }

    insertStyleFile(styleFile)
    {
        this.appendChild( document.createElement('style') );
        this.styleSheets[0].insertRule("@import '"+styleFile+"'");
    }

    // connectedCallback()
    // {
    // }
    //
    // disconnectedCallback()
    // {
    // }
}

//registration
customElements.define('wc-button', Button);

//export module
export { Button };

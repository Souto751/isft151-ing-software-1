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
}

//Registration of web component:
/*
https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define
Parameters of customElements.define:
-name: Name for the new custom element. Note that custom element names must
        contain a hyphen.
-constructor: Constructor for the new custom element.
-options: (Optional) Object that controls how the element is defined. One option
            is currently supported:
                    *extends: String specifying the name of a built-in element
                    to extend. Used to create a customized built-in element.
*/
customElements.define('wc-button', Button);

//export module
export { Button };

class ExtendedButton extends HTMLButtonElement
{
    constructor()
    {
        super();
    }

    set caption(value)
    {
        /*use "this" because the shadow root was already defined
        in HTMLButttonElement*/
        this.innerText = value;
    }

    set tooltip(value)
    {
        this.title = value;
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
customElements.define('wc-extended-button', ExtendedButton, { extends: 'button' });

//export module
export { ExtendedButton };

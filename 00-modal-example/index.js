import { ExtendedButton } from './components/Button/ExtendedButton.js';
var initButton = new ExtendedButton;
initButton.caption = "Modal";
initButton.title = "Execute Modal";
initButton.style.backgroundColor="violet";

import { Button } from './components/Button/Button.js';
var initButton2 = new Button;
initButton2.caption = "Modal";
initButton2.title = "Execute Modal";
initButton2.style.backgroundColor="yellow";

import { Modal } from './components/Modal/Modal.js';
var helloWorldModal = new Modal;
helloWorldModal.title = "Hello!";
helloWorldModal.message = "How are you?";
helloWorldModal.initButton = initButton;

/*TEST INCORRECT TYPE OF OBJECT*/
//helloWorldModal.initButton = initButton2;

document.body.appendChild(helloWorldModal);

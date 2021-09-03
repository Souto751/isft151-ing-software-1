// function helloGreet()
// {
//     alert("Hello!");
// }
// import { ExtendedButton } from './components/Button/ExtendedButton.js';
// var extendedButton = new ExtendedButton;
// extendedButton.caption = "Hello I am a extended button!";
// extendedButton.title = "How are you?";
// extendedButton.onclick = helloGreet;
// extendedButton.hidden = false;
// document.body.appendChild(extendedButton);

function greet(greeting)
{
    alert(greeting);
}

import { Button } from './components/Button/Button.js';
var testButton = new Button;
testButton.caption = "Hello I am a button!";
testButton.tooltip = "How are you?";
testButton.onclick = function(){greet('I am a simple button')};
testButton.disabled = true;
document.body.appendChild(testButton);

import { ExtendedButton } from './components/Button/ExtendedButton.js';
var extendedButton = new ExtendedButton;
extendedButton.caption = "Hello I am a extended button!";
extendedButton.title = "How are you?";
extendedButton.onclick = function(){greet('I am a extended button')};
extendedButton.hidden = false;
extendedButton.style.backgroundColor = "red";
extendedButton.style.color = "yellow";
document.body.appendChild(extendedButton);

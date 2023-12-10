let body = document.querySelector('body');
let input = document.createElement('input');
input.placeholder = 'Enter text';
body.appendChild(input);
let reverseText = document.createElement('h1');
body.appendChild(reverseText);

function reverseInput() {
    let inputValue = input.value;
    if (inputValue.length > 1) {
        let firstSymbol = inputValue.charAt(0);
        let lastSymbol = inputValue.charAt(inputValue.length - 1);
        let modifiedText = lastSymbol + inputValue.substring(1, inputValue.length -1) + firstSymbol;
        reverseText.textContent = modifiedText;
    } else {
        reverseText.innerHTML = 'reik dar vieno simbolio';
    }
}

input.addEventListener('input', reverseInput);
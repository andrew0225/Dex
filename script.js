const button = document.getElementById("myButton");
const message = document.getElementById("message");
const submit = document.getElementById("submitButton")
const input = document.getElementById("textInput");
const phoneInput = document.getElementById("phoneInput");




let enteredText = "";

submit.addEventListener("click", () => {
    enteredText = input.value;

    message.textContent = enteredText;
});
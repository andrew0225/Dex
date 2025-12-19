const button = document.getElementById("myButton");
const message = document.getElementById("message");
const submit = document.getElementById("submitButton")
const nameInput = document.getElementById("textInput");
const phoneInput = document.getElementById("phoneInput");




const phoneBookData = [];


submit.addEventListener("click", submitEntry);
phoneInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        submitEntry();
    }
} )


function submitEntry() {
        const name = nameInput.value;
    const phoneNumber = phoneInput.value;

    if(name === "" || phoneNumber === "") {
        alert("Please enter name and phone number");
        return;
    }

    const entry = {name: name, phone: phoneNumber};
    phoneBookData.push(entry);

    //message.textContent = "HI"
    message.textContent = phoneBookData.map(e => `${e.name}: ${e.phone}`).join("\n");

    nameInput.value = "";
    phoneInput.value = "";

}
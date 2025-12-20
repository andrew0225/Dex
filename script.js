const button = document.getElementById("myButton");
const message = document.getElementById("message");
const submit = document.getElementById("submitButton")
const nameInput = document.getElementById("textInput");
const phoneInput = document.getElementById("phoneInput");
const savedData = localStorage.getItem("phoneBookData");
const phoneBookData = savedData ? JSON.parse(savedData) : [];

displayData();

submit.addEventListener("click", submitEntry);
phoneInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        submitEntry();
        displayData();
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
    localStorage.setItem("phoneBookData", JSON.stringify(phoneBookData));
    displayData();

    nameInput.value = "";
    phoneInput.value = "";

}


function displayData () {
    message.innerHTML = "";
    phoneBookData.forEach((entry, index) => {
        const div = document.createElement("div");
        div.textContent = `${entry.name}: ${entry.phone}`;

        const deleteButton = document.createElement("button");
        //deleteButton.innerHTML = '<img src="Pictures/deleteButton.png" alt="Delete" height="12" width="12">';
        deleteButton.textContent = "Delete";
        deleteButton.style.display = "flex";

        deleteButton.addEventListener("click", () => {
            phoneBookData.splice(index, 1);
            localStorage.setItem("phoneBookData", JSON.stringify(phoneBookData));
            displayData();
        });



        div.appendChild(deleteButton);
        message.appendChild(div);
    });


}
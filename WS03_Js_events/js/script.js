const animalButton = document.querySelector("#animalButton");

animalButton.addEventListener("click", function() {
    alert("You clicked me!");
});

const animal = "Tiikeri";
const habitat = "Metsä";
const diet = "Liha";

function showTable() {
    const table = `
        <table>
            <tr>
                <th>Eläin</th>
                <th>Elinympäristö</th>
                <th>Ruokavalio</th>
            </tr>
            <tr>

                <td>${animal}</td>
                <td>${habitat}</td>
                <td>${diet}</td>
            </tr>
            <tr>
                <td>Norsu</td>
                <td>Savanni</td>
                <td>Kasvit</td>
            </tr>
            
        </table>
    `;

    const tableContainer = document.querySelector("#tableContainer");
    tableContainer.innerHTML = table;
}

const tableButton = document.querySelector("#tableButton");

tableButton.addEventListener("click", showTable);

// harjoitus2

const harjoitus2 = document.querySelector("#harjoitus2");
harjoitus2.addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});

const harjoitus1 = document.querySelector("#harjoitus1");

harjoitus1.addEventListener("click", function() {
    harjoitus1.style.color = "red";
    harjoitus1.innerHTML = "Bye bye mouse!";
});

// harjoitu3

const feedback = document.querySelector("#feedback");
feedback.addEventListener("focus", function() {
    const status = document.querySelector("#status");
    status.innerHTML = "Kirjoita palautteesi tähän!";
});

feedback.addEventListener("blur", function() {
    const status = document.querySelector("#status");
    status.innerHTML = "";
});

feedback.addEventListener("input", function() {
    const charcount = document.querySelector("#charcount");
    charcount.innerHTML = feedback.value.length + "/200";


const preview = document.querySelector("#preview");
    preview.innerHTML = feedback.value;
});

//harjoitus 4 

const feedbackForm = document.querySelector("#feedbackForm");
feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const length = feedback.value.length;

   if (length < 10 || length > 200) {
        alert("Feedback must be between 10 and 200 characters.");
    } else {
        feedback.value = "";
        alert("Thank you for your feedback!");
    }
});

//harjoitus5
const keybox = document.querySelector("#keybox");
const keyinfo = document.querySelector("#keyinfo");

document.addEventListener("keydown", function(event) {
    console.log(event);

    keyinfo.innerHTML = "Näppäin: " + event.key + " | Koodi: " + event.code;
    keybox.innerHTML = event.key;
});

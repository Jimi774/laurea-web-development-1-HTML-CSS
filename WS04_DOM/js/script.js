//Tehtävä1

// Muokataan otsikkoa kun nappia painetaan
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";

});

//Lisätään otsikko tyyli
const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");
});


//Muutetaan eläintekstiä
const changeTextButton = document.querySelector("#changeTextButton");

const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", function () {
    animalText.textContent = "Tiikerit ovat suuria kissaeläimiä.";
});

//tehtävä2

//Luodaan elementit

const animalContent = document.querySelector("#animalContent");

const animalHeading = document.createElement("h3");

animalHeading.textContent = "Päivän eläin";

animalHeading.classList.add("animal-heading");

const animalDescription = document.createElement("p");

animalDescription.textContent = "Tiikerit ovat suuria kissaeläimiä, jotka elävät Aasiassa.";

const animalImage = document.createElement("img");

animalImage.src = "img/Bengal_tiger.jpg";
animalImage.alt = "Tiikeri";

animalContent.append(animalHeading, animalDescription, animalImage);

//Lisätään painikkeisiin tapahtumakuuntelijat

const hideAnimalButton = document.querySelector("#hideAnimalButton");

const showAnimalButton = document.querySelector("#showAnimalButton");

hideAnimalButton.addEventListener("click", function () {
    animalContent.style.display = "none";
});

showAnimalButton.addEventListener("click", function () {
    animalContent.style.display = "block";
}); 


//Tehtävä3
//Muuta valinnan perusteella eläimen nimi, kuva ja kuvausteksti.
const animalName = document.querySelector("#animalName");
const selectedAnimalImage = document.querySelector("#animalImage");
const selectedAnimalDescription = document.querySelector("#animalDescription");
const animalSelect = document.querySelector("#animalSelect");

animalSelect.addEventListener("change", function () {

    const selectedAnimal = animalSelect.value;

    if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiikeri";
        selectedAnimalImage.src = "img/Bengal_tiger.jpg";
        selectedAnimalDescription.textContent = "Tiikerit ovat suuria kissaeläimiä, jotka elävät Aasiassa.";
        selectedAnimalImage.alt = "Tiikeri";
       
    }

    else if (selectedAnimal === "elephant") {
    animalName.textContent = "Elefantti";
    selectedAnimalImage.src = "img/elephant.jpg";
    selectedAnimalDescription.textContent = "Elefantit ovat maailman suurimpia maaeläimiä.";
}

else if (selectedAnimal === "penguin") {
    animalName.textContent = "Pingviini";
    selectedAnimalImage.src = "img/penguin.jpg";
    selectedAnimalDescription.textContent = "Pingviinit ovat lentokyvyttömiä lintuja, jotka elävät eteläisellä pallonpuoliskolla.";
}

else if (selectedAnimal === "panda") {
    animalName.textContent = "Panda";
    selectedAnimalImage.src = "img/panda.jpg";
    selectedAnimalDescription.textContent = "Pandat syövät pääasiassa bambua ja elävät Kiinan vuoristoalueilla.";
}

});

//Lisätään Hover
selectedAnimalImage.addEventListener("mouseenter", function () {
    selectedAnimalImage.classList.add("image-highlight");
});

selectedAnimalImage.addEventListener("mouseleave", function () {
    selectedAnimalImage.classList.remove("image-highlight");
});

//Tehtävä4

const animalForm = document.querySelector("#animalForm");

animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const animal = observationAnimal.value;
    const location = observationLocation.value;
    const date = observationDate.value;

    if (animal === "" || location === "" || date === "") {
        alert("Täytä kaikki kentät.");
        return;
    }

    const newRow = document.createElement("tr");

    const animalCell = document.createElement("td");
    animalCell.textContent = animal;

    const locationCell = document.createElement("td");
    locationCell.textContent = location;

    const dateCell = document.createElement("td");
    dateCell.textContent = date;

    newRow.append(animalCell, locationCell, dateCell);

    observationTableBody.append(newRow);
});








// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE





// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT
// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT



// listener for the select element from the drop down list.


    // function to update the DOM based on the selected animal
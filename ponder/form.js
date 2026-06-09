

const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const campusBoxes = document.querySelectorAll('input[name="campus"]');

function updateNotesField() {
  const value = travelRange.value;
  if(value === "many") {
    notesContainer.style.display = "block";
  }
  if(value === "one") {
    notesContainer.style.display = "none";
  }

  // Show the travel notes on the form if they are choosing many campuses and require it
  
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

function getSelectedCampuses() {
  //.from converts a NodeList into a real array, so then you can use .filter and .map
    return Array.from(campusBoxes)
                .filter(box => box.checked)
                .map(box => box.value); 
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.travelRange.value;
    const availableDate = form.availableDate.value;
    const selectedCampuses = getSelectedCampuses();
    const note = form.notes.value.trim();
    var errMsg = "";

  // Validate the input
  // Let the user know to select at least one campus

    const numberOfCampuses = form.travelRange.value;
    const campuses = form.campus;
    if(numberOfCampuses === "one" && getSelectedCampuses(campuses).length == 0) {
        console.log("No campuses checked");
        //document.getElementById("output").textContent = "Please select at least one campus."
        errMsg = "Please select at least one campus."
    }
    if(numberOfCampuses === "many" && getSelectedCampuses(campuses).length < 2) {
        console.log("Not enough campuses selected.")
        //document.getElementById("output").textContent = "Please select at least two campuses."
        errMsg = "Please select at least two campuses."
    }
    if(numberOfCampuses === "one" && getSelectedCampuses(campuses).length > 1) {
        console.log("Too many campuses selected.")
        //document.getElementById("output").textContent = "Please select only one campus or change your preference."
        errMsg = "Please select only one campus or change your preference."
    }

  
  // Let the user know if they choose many campuses but didn't put a note that they need to add a note

  
  //Let the user know if they choose many campus but only had one campus selected that they need to choose at least two campuses
  

    if (isPastDate(availableDate)) {
        output.textContent = "Please choose a later date.";
        return;
    }

    if(errMsg.length > 0){
        output.textContent = errMsg;
    }
    else {
        output.innerHTML = `
        <h2>Preference Submitted</h2>
        <p>${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Availability: ${availableDate}</p>
        <p>Campuses: ${selectedCampuses.join(", ")}</p>
        <p>Preference Level: ${type}</p>
        `;
    }

    form.reset();
    updateNotesField();
});
          

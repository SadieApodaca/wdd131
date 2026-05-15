function myFunction() {
  const menu = document.getElementById('myDropdown');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}
const menu = document.getElementById('myDropdown');
function secondFunction(x) {
  if (x.matches) { // If media query matches
    menu.style.display = 'grid';
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(min-width: 1401px)")

// Call listener function at run time
secondFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
});


const gallery = document.querySelector('.grid');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    console.log(e.target.src);
    modal.showModal();
    
// Code to show modal  - Use event parameter 'e'   
    
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
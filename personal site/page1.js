const keychainImg = ["tinified/pink-mew.jpg", "tinified/ninja-turtle.jpg", "tinified/unicorn.jpg"];
const animalImg = ["tinified/blue-dino.jpg", "tinified/teal-octopus.jpg", "tinified/yellow-duck.jpg"];
const bagImg = ["tinified/gray-bag.jpg", "tinified/purple-pattern.jpg"];
const blanketImg = ["tinified/peach-stripes.jpg", "tinified/flower-blanket.jpg", "tinified/orange-blue-blanket.jpg"];

keychainImg.forEach(key => {
        //Display a new image for each item in the array.

        const img = `
            <img src="${key}" style="width:30%"/>
        `;
        document.getElementById("keys").innerHTML += img;
    
});

animalImg.forEach(ani => {
        //Display a new image for each item in the array.

        const img = `
            <img src="${ani}" style="width:30%"/>
        `;
        document.getElementById("animals").innerHTML += img;
    
});

bagImg.forEach(bag => {
        //Display a new image for each item in the array.

        const img = `
            <img src="${bag}" style="width:30%"/>
        `;
        document.getElementById("bags").innerHTML += img;
    
});

blanketImg.forEach(blk => {
        //Display a new image for each item in the array.

        const img = `
            <img src="${blk}" style="width:30%"/>
        `;
        document.getElementById("blankets").innerHTML += img;
    
});


function openNav() {
  document.getElementById("mySidenav").style.width = "150px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
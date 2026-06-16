

const dieImages = document.querySelectorAll("#gameboard img");


document.getElementById("rollButton").addEventListener("click", (event) => {

    dieImages.forEach((image => {
        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif"
        }
        
    }));


    setTimeout(() =>  {
        dieImages.forEach((image) => {
            if(isDieUnlocked(image)) {
                image.src = "assets/white_dice_" + (Math.floor(Math.random() * 6) + 1) + ".gif";
            }
        });
    }, 2000);


})

function isDieUnlocked(dieIamge) {
    const checkboxes = document.querySelectorAll("#gameboard input");
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);
    return unchecked.find(chekcbox => checkbox.className === dieImage.className)
}

const form = document.querySelector("#orderForm");
const productType = document.querySelector("#productType");
const lbKeychain = document.getElementById("lbkeychain")
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const keychainChoice = document.querySelector("#keychainType");
const animalType = document.querySelector("#animalType");
const lbAnimal = document.getElementById("lbanimal")
const bagSize = document.querySelector("#bagSize");
const lbBag = document.getElementById("lbbag");
const bagDesign = document.querySelector("#bagDesign");
const lbBagDes = document.getElementById("lbbagdes");
const bagColors = document.querySelector("#bagColors");
const lbBagColor = document.getElementById("lbbagcolor");
const blanketSize = document.querySelector("#blanketSize");
const lbBlanket = document.getElementById("lbblanket");
const blanketDesign = document.querySelector("#blanketDesign");
const lbBlanketDes = document.getElementById("lbblanketdes");
const blanketColors = document.querySelector("#blanketColors");
const lbBlanketColor = document.getElementById("lbblanketcolor");


function productChange() {
  console.log(productType.value);
  keychainChoice.style.display = "none"
  lbKeychain.style.display = "none";
  animalType.style.display = "none";
  lbAnimal.style.display = "none";
  bagSize.style.display = "none";
  lbBag.style.display = "none";
  bagColors.style.display = "none";
  lbBagColor.style.display = "none";
  bagDesign.style.display = "none";
  lbBagDes.style.display = "none";
  blanketSize.style.display = "none";
  lbBlanket.style.display = "none";
  blanketColors.style.display = "none";
  lbBlanketColor.style.display = "none";
  blanketDesign.style.display = "none";
  lbBlanketDes.style.display = "none";
  if (productType.value == "keychain") {
    keychainChoice.style.display = "block";
    lbKeychain.style.display = "block";
    return;
  }
  if (productType.value == "stuffedAnimal") {
    animalType.style.display = "block";
    lbAnimal.style.display = "block";
    return;
  }
  if (productType.value == "bag") {
    bagSize.style.display = "block";
    lbBag.style.display = "block";
    bagColors.style.display = "block";
    lbBagColor.style.display = "block";
    bagDesign.style.display = "block";
    lbBagDes.style.display = "block";
    return;
  }
  if (productType.value == "blanket") {
    blanketSize.style.display = "block";
    lbBlanket.style.display = "block";
    blanketColors.style.display = "block";
    lbBlanketColor.style.display = "block";
    blanketDesign.style.display = "block";
    lbBlanketDes.style.display = "block";
    return;
  }
  
}




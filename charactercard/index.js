
const cardsData = [
    {
        creatureName: "Snortleblat",
        imgAlt: "A sneaky goblin",
        imgSrc: "snortleblat.webp",
        className: "Swamp Beast Diplomat",
        level: "5",
        health: "100"
    },
];

function cardTemplate(cardsData) {
    return `
        <img class="image" ${cardsData.imgSrc}>
        <h1 class="name">${cardsData.creatureName}</h1>
        <div class="stats">
            <p class="stats">Class: ${cardsData.className}</p>
            <p class="stats">Level: ${cardsData.level}</p>
            <p class="stats">Health: ${cardsData.health}</p>
        </div>
    `
}


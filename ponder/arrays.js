

let names = ["Aaron Andrus", "Manny Masa", "Tamanda Tanda"];

console.log(names);

console.log(names[2]);

let studentName = "Brother Warner";
let studentClasses = ["WDD131", "CSE111", "CSE372", "CSE199R"];
let studentGrades = [90, 88, 95, 100];

let student = {
    name: "Brother Warner",
    classes: ["WDD131", "CSE111", "CSE372", "CSE199R"],
    grades: [90, 88, 95, 100]
}

console.log(student.name);

names.forEach((name) => {
    console.log(name);
})

let newNames = names.map((name) => {
    return name + "Hatchley";
})

console.log(newNames);

let filteredName = names.filter((name) => {
    return name[0] === "M";
})

console.log(filteredName)
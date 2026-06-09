
const course = {
    code: "WDD 131",
    name: "Dynamic Web Fundamentals",
    sections: [
        {sectionNum: "1", roomNum: "STC 347", enrolled: 24, days: "TTh", instructor: "Brother Alvey" },
        {sectionNum: "2", roomNum: "STC 375", enrolled: 18, days: "MW", instructor: "Sister Anderson" },
        {sectionNum: "3", roomNum: "STC 361", enrolled: 12, days: "MW", instructor: "Brother Comeaux" }
    ],
    
    enrollStudent: function () {
        console.log('student enrolled');
      },
    enrollStudent: function(sectionNum) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled++;
          renderSections(this.sections);
        }
    }
};

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(course.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    course.enrollStudent(sectionNum);
});
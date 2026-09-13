function getPassedStudents(students) {
  const passedStudents = [];
  for (const i of students) {
    if (i.mark >= 50) {
      passedStudents.push(i.name);
    }
  }
  return passedStudents;
}
const students = [
  { name: "Anu", mark: 72 },
  { name: "Rahul", mark: 50 },
  { name: "Meera", mark: 88 },
  { name: "Arun", mark: 31 },
];
console.log(getPassedStudents(students));

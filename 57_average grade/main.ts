//making a list of grades
let grades = [79, 66, 56, 82, 42];
//find averageGrade by using .reduce()
let averageGrade = grades.reduce((total,grade)=>total + grade, 0)/grades.length;
console.log(averageGrade);
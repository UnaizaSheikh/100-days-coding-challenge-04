//making a list of grades
var grades = [79, 66, 56, 82, 42];
//find averageGrade by using .reduce()
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrade);

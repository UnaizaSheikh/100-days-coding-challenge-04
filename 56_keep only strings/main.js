//make a mixed array
var mixedArray = [22, "laptops", true, 10, "books", false, "chairs"];
//show only string in new array
var newArray = mixedArray.filter(function (array) { return typeof array === "string"; });
console.log(newArray);

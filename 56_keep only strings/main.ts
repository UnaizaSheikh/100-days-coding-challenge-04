//make a mixed array
let mixedArray = [22, "laptops", true, 10, "books", false, "chairs"];
//show only string in new array
let newArray = mixedArray.filter(array=>typeof array === "string");
console.log(newArray);
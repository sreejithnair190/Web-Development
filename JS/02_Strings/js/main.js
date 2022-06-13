//Strings
const myVariable = "Mathematics";

//The length Property
console.log(myVariable.length);

//String Method
console.log(myVariable.charAt(4));

console.log(myVariable.indexOf("mat"));
console.log(myVariable.indexOf("Mat"));

console.log(myVariable.lastIndexOf("at"));
console.log(myVariable.lastIndexOf("ath"));

console.log(myVariable.slice(5))
console.log(myVariable.slice(5,8))
console.log(myVariable.slice(5,6))
console.log(myVariable.slice(5,3))

console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());

console.log(myVariable.includes("afa"));
console.log(myVariable.includes("mat"));

console.log(myVariable.split("e"));
console.log(myVariable.split("t"));
console.log(myVariable.split(""));
console.log("Satya,Stebin,Prince,Joseph,Prmav,Manan".split(","));
console.log("This is a sentence".split(" "));



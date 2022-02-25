const calculator = require("./calci")
const bcrypt = require("bcrypt")

answer = calculator.addition(2,3);



console.log("Addition of 2 and 3 is: ",answer)
console.log("Subtraction of 2 and 3 is:", calculator.subtraction(2,3))
console.log("Thank You BYE !!!!");

console.log("Encryption Text is: Mayur")
bcrypt.hashSync("Mayur",10)
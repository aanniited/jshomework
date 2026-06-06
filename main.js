const isNumber= require("is-number");

console.log(isNumber(125))


const validator = require("validator");

console.log(validator.isEmail("test@test.com"));
console.log(validator.isEmail("abcDE123"));
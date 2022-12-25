const { age } = require("./another.js");

const secretValue = 321;

module.exports.value = secretValue * 2 * age;

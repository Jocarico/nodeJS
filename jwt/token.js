const jwt = require('jsonwebtoken');

const secretkey = "elpepe";

const jona = {
    "name": "Jonatan",
    "apellido": "Rico"
};

const token = jwt.sign(jona, secretkey);

console.log(token)
const decodeed = jwt.decode(token);
console.log(decodeed);

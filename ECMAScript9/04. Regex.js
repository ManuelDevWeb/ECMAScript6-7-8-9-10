//Agrupar bloques de regex (expresion regular)
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ //Expresion regular para fecha año-mes-dia
const match = regexData.exec('2018-04-20');

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
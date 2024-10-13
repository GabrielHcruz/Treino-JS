const pi = 3.14159;

var input = require("fs").readFileSync("stdin","utf-8");
var raio = parseFloat(input);

/* var area = pi * (raio * raio);
        ou...
*/
var area = pi * Math.pow(raio,2);

console.log("A=" + area.toFixed(4));
/*
       .toFixed -- realiza uma formatação em variavel. 
        o valor entre (...), indica o numero de casas.
        equivalente ao ("%.2f") do printf .
*/

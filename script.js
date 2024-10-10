var input = require("fs").readFileSync("stdin", "utf8");
// require serve pra fazer requisição de modulos = vai ler um arquivo no caso "stdin"
// "fs" = file System
// variavel input = vai receber o require, ou seja vai receber os dados coletados de "stdin"

var linhas = parseInt(input.split("*"));
// a variavel linhas recebe = input
// o comando split realiza uma quebra de String, o valor dentro dos parenteses indica onde será feita
//essa quebra, "\n" = a cada linhas. tambem podem ser usados simbolos ou espaço em branco

// o comando: typeof = mostra o tipo de dado de uma variavel
// ex: conlsole.log(typeof input); -- vai mostrar o tipo de dado de input

console.log(typeof linhas);

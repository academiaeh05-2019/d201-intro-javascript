console.log('Hello World');

let nomeDoUsuario = prompt('Qual o seu nome?');
let idade = prompt('Quantos anos você tem?');
let programador = confirm('Você é um programador?');

// console.log('Olá ' + nomeDoUsuario);
alert('Olá ' + nomeDoUsuario + ', você tem ' + idade + ' anos.');
// console.log(idade);
// console.log(vivo);

// if (programador === true) {
if (programador) {
    alert('Você é um programador, parabéns.');
}
else if (Number(idade) >= 16 && Number(idade) <= 25) {
    alert('Que pena, você já ouviu falar da Estação Hack?');
}
else if (false) {

}
else {
    alert('Que pena, você deveria aprender JavaScript, ele é muito legal.');
}

/* 
TABELA VERDADE:
&& (AND)
true && true = true
true && false = false
false && false = false

|| (OR)
true || true = true
true || false = true
false || false = false
*/
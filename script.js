/*
Nós vamos criar um sistema que avalia se o aluno foi aprovado ou não em uma matéria. Pergunte pro usuário:
- O nome do aluno
- A matéria
- A nota
Com os valores recebidos, verifique se o aluno teve nota superior a média (6). A saída do programa deve falar:
"Parabéns, o aluno X foi aprovado na matéria Y"
OU
"Parece que a nota do aluno X na matéria Y foi insuficiente"

BÔNUS:
Crie uma segunda condição onde o aluno é aprovado "pelo sistema" se a nota for 0.5 abaixo da média. Nesse caso, o programa deve falar:
"O aluno X foi aprovado na matéria Y pelo sistema."
*/

let aluno = prompt('Qual o nome do aluno?');
let materia = prompt('Qual o nome da matéria?');
let nota = prompt('E qual foi a nota?');

let media = 6;

if (Number(nota) >= media) {
    // alert('Parabéns, o aluno '+ aluno + ' foi aprovado na matéria ' + materia);
    //Template String
    alert(`Parabéns, o aluno ${aluno} foi aprovado na matéria ${materia}`);
}
else if (Number(nota) >= media - 0.5) {
    // alert('O aluno '+ aluno + ' foi aprovado na matéria ' + materia + ' pelo sistema');
    alert(`O aluno ${aluno} foi aprovado na matéria ${materia} pelo sistema`);
}
else {
    // alert('Parece que a nota do aluno ' + aluno + ' na matéria ' + materia + ' foi insuficiente');
    alert(`Parece que a nota do aluno ${aluno} na matéria ${materia} foi insuficiente`);
}
/* 
Crie um sistema onde o usuário indica quantos lances de escada ele gostaria de criar. Com esse valor, desenhe as escadas no console.

Exemplo:
Usuário digita 5 lances
*
**
***
****
*****

BÔNUS:
Permita que o usuário defina qual o 'material' da escada.

Exemplo:
Usuário quer 5 lances de escada utilizando #
#
##
###
####
#####
*/

let lancesDeEscada = prompt('Quantos lances de escada você gostaria?');

while(isNaN(Number(lancesDeEscada))) {
    lancesDeEscada = prompt(`Você digitou "${lancesDeEscada}". O programa só aceita valores numéricos nessa etapa. Por favor, digite quantos lances de escada você gostaria`);
}

let material = prompt('Qual o material da sua escada?');
let desenho = '';

let i = 0;

while (i < Number(lancesDeEscada)) {
    desenho = desenho + material;
    console.log(desenho);

    i++;
}

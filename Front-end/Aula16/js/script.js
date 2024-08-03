// window.alert("Curso Front End Senai")//
var nome = "";
nome = window.prompt("Digite o seu nome:");
// window.alert("Bem vindo, " + nome)
// var n1 = 10;
// var n2 = 8.9;
// window.alert("1 numero + numero: "+(n1+n2));
var bim1 = 0.0;
var bim2 = 0.0;
var bim3 = 0.0;
var bim4 = 0.0;
var media = 0.0;
//entradas do sistema
bim1 = parseFloat(window.prompt("Informe a nota do 1º bimestre:"));
bim2 = parseFloat(window.prompt("Informe a nota do 2º bimestre:"));
bim3 = parseFloat(window.prompt("Informe a nota do 3º bimestre:"));
bim4 = parseFloat(window.prompt("Informe a nota do 4º bimestre:"));
//processamento das informações
media = (bim1 + bim2 + bim3 + bim4) / 4;
//saida das informações procesadas
window.alert("O aluno " + nome + " teve média final de: " + media);
var soma = 0.0;
var subi = 0.0;
var divi = 0.0;
var multi = 0.0;
//entradas do sistema
var v1 = parseFloat(window.prompt("Digite o 1º valor"));
var v2 = parseFloat(window.prompt("Digite o 2º valor"));
//processamento das informações
soma = v1 + v2;
subi = v1 - v2;
div = v1 / v2;
multi = v1 * v2;
//saidas dos redultados
window.alert("v1+v2="+soma);
window.alert("v1-v2="+subi);
window.alert("v1/v2="+div);
window.alert("v1*v2="+multi);
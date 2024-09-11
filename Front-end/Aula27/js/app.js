var cor = "";
var lamp = "";
var lamp=0;
function verde() {
    document.getElementById('coluna1').style.backgroundColor = "green";
    cor = "Fundo Verde";
    definirCor();
}
function amarelo() {
    document.getElementById('coluna1').style.backgroundColor = "yellow";
    cor = "Fundo Amarelo";
    definirCor();
}
function azul() {
    document.getElementById('coluna1').style.backgroundColor = "blue";
    cor = "Fundo Azul";
    definirCor();
}
function vermelho() {
    document.getElementById('coluna1').style.backgroundColor = "red";
    cor = "Fundo Vermelho";
    definirCor();
}
function controleLamp(){

if (lamp==0){
    lamp=1;
    document.getElementById('lampada').src="img/on.png";
    document.getElementById('lamp').style.backgroundColor="black";
    document.getElementById('texto2').textContent="Lampada Acesa";
    document.getElementById('texto2').style.color="white";
}
else{
    lamp=0;
    document.getElementById('lampada').src="img/off.png";
    document.getElementById('lamp').style.backgroundColor="white";
    document.getElementById('texto2').textContent="Lampada Apagada";
    document.getElementById('texto2').style.color="black";
}
}

function definirCor() {
    document.getElementById('texto').textContent = cor;
}
function calculadora(){
    alert("Teste da Função");
}

function somar(x,y){
    document.getElementById('resultado').value=parseInt(x)+parseFloat(y);
}

function subtrair(a,b){
    document.getElementById('resultado').value=parseInt(a)-parseFloat(b);
}
function multiplica(a,b){
     document.getElementById('resultado').value=parseInt(a)*parseFloat(b);

}

function dividi(a,b){
    
    document.getElementById('resultado').value=parseInt(a)/parseFloat(b);

}

var nome = "";
var b1= 0.0;
var b2= 0.0;
var b3= 0.0;
var b4= 0.0;
var media = 0.0;

function calcularMedia(n,w,x,y,z){
nome=n;
b1=parseFloat(w)
b2=parseFloat(x)
b3=parseFloat(y)
b4=parseFloat(z)   
media=(b1+b2+b3+b4)/4;
alert("bem vindo pessoa: " + nome)
document.getElementById('resultadobi').value=media
}


var alt = 0.0;
var larg = 0.0;
var prof = 0.0;
function calcularVolume(a, l, p) {
    var vol = 0.0;
    alt = parseFloat(a);
    larg = parseFloat(l);
    prof = parseFloat(p);

    vol = alt * larg * prof;

    document.getElementById('volumeCubico').value = vol;
}

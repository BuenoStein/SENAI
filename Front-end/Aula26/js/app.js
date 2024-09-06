var frutas = ["banana","caju","morango"];



// Lista funções Arrays
function nomeFrutas(){
    window.alert(frutas);
    
}
function quantidadeFrutas(){
    window.alert(frutas.length);
    
}
function frutaPosicao(){
    window.alert(frutas[0]);
    
}
function colocandoInicio(){
    frutas.unshift("Manga");
    window.alert(frutas);
    
}
function colocandoFinal(){
    frutas.push("uva");
    window.alert(frutas);

}
function removePrimeiro(){
    frutas.shift();
    window.alert(frutas);
}
function removeUltimo(){
    frutas.pop()
    window.alert(frutas)
}



var cores = []
// Laço de Repetição1

function chamarVetor1() {
    for (var j = 0; j < 4; j++) {
        cores.push(window.prompt("Digite uma cor:"));
    }
    window.alert(cores);
}
// Laço de Repetição2
function chamarVetor2() {
    for (var i = 0; i <nomes.length; i++) {
        window.alert(nomes[i]);
    }
}
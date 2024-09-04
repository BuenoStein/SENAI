//laço for (PARA)

function para(n) {
    var i = parseInt(n);
    for (i; i <= 10; i++) {
        window.alert("Valor do i:" + i)
    }
    window.alert("Fim do laço For");
}
//laço While (ENQUANTO)
function enquanto(n) {
    var k = parseInt(n);
    var i = 1; //variavel inicializadora
    while (i < k) {
        window.alert("Valor do I:" + i)
        i++;
    }
    window.alert("Fim do Laço While");
}
//laço do while (FAÇA ENQUANTO)
var j = 0;
function fazerenquanto(n) {
    j = parseInt(n);
    do{
        window.alert("Valor do J:" + j);
        j++;
    
    }while(j<=10);
        window.alert("Fim do Do While")
}
//laço do while (FAÇA ENQUANTO)
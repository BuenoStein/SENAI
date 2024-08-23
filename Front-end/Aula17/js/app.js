function calculadora() {
    alert("Teste da Função");
}

function somar(x, y) {
    document.getElementById('resultado').value = parseInt(x) + parseFloat(y);
}

function subtrair(a, b) {
    document.getElementById('resultado').value = parseInt(a) - parseFloat(b);
}
function multiplica(a, b) {
    document.getElementById('resultado').value = parseInt(a) * parseFloat(b);

}

function dividi(a, b) {

    document.getElementById('resultado').value = parseInt(a) / parseFloat(b);

}

var nome = "";
var b1 = 0.0;
var b2 = 0.0;
var b3 = 0.0;
var b4 = 0.0;
var media = 0.0;

function calcularMedia(n, w, x, y, z) {
    nome = n;
    b1 = parseFloat(w)
    b2 = parseFloat(x)
    b3 = parseFloat(y)
    b4 = parseFloat(z)
    media = (b1 + b2 + b3 + b4) / 4;
    document.getElementById('resultadobi').value = media
    if (media >= 7) {
        document.getElementById('situacao').value = 'Aprovado, aluno: ' + nome;
    } else if(media >=5){
        document.getElementById('situacao').value = 'Recuperação, aluno: ' + nome;
    } else {
        document.getElementById('situacao').value = 'Reprovado, aluno: ' + nome;
    }
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
var num = 0;
var resto = 0;
function jogar(n) {
    num = parseInt(n);
    resto = num % 2;
    if (resto == 0) {
        document.getElementById('parimpar').value = "PAR";
    } else {
        document.getElementById('parimpar').value = "IMPAR";
    }
}
var dia = 0
function mostrarDia(dia){
dia= parseInt(dia)
    if(dia == 1){
        document.getElementById('diaSemana').value = "Domingo"
    }
    else if(dia == 2){
        document.getElementById('diaSemana').value = "Segunda"
    }
    else if(dia == 3){
        document.getElementById('diaSemana').value = "Terça"
    }
    else if(dia == 4){
        document.getElementById('diaSemana').value = "Quarta"
    }
    else if(dia == 5){
        document.getElementById('diaSemana').value = "Quinta"
    }
    else if(dia == 6){
        document.getElementById('diaSemana').value = "Sexta"
    }
    else if(dia == 7){
        document.getElementById('diaSemana').value = "Sabado"
    } else {
        document.getElementById('diaSemana').value = "Simplesmente não existe"
    }
    // switch(dia){
    //     case 1:
    //         document.getElementById('diaSemana').value = "Domingo";
    //         break;
    //     default:
    //         document.getElementeById('diSemana').value = "Simplesmente não existe"
    

    }

     var mes = 0
     function mostrarMes(mes){
     mes = parseInt(mes)
     if(mes == 1){
         document.getElementById('numberMes').value = "Janeiro"
     } else if(mes ==2){
         document.getElementById('numberMes').value = "Fevereiro"
     } else if(mes ==3){
         document.getElementById('numberMes').value = "Março"
     } else if(mes ==4){
         document.getElementById('numberMes').value = "Abril"
     } else if(mes ==5){
         document.getElementById('numberMes').value = "Maio"
     } else if(mes ==6){
         document.getElementById('numberMes').value = "Junho"
     } else if(mes ==7){
         document.getElementById('numberMes').value = "Julho"
     } else if(mes ==8){
         document.getElementById('numberMes').value = "Agosto"
     } else if(mes ==9){
         document.getElementById('numberMes').value = "Setembro"
     } else if(mes ==10){
         document.getElementById('numberMes').value = "Outubro"
     } else if(mes ==11){
         document.getElementById('numberMes').value = "Novembro"
     } else if(mes ==12){
         document.getElementById('numberMes').value = "Dezembro"
     } else {
             document.getElementById('numberMes').value = "Simplesmente não existe"
          }
     }
     var u = "senai"
     var p = "senai123" 
     function loginButton(user,pass){
         if(user == u && pass == p){
             window.alert("entrou")
             window.location.assign("pagina.html")
             // faz ir para outra paginaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            } else if(user == u && pass !=p){
                window.alert("entrada negada! senha incorreta")
            } else if (user != u && pass==p){
                window.alert("entrada negada! usario incorreto")
            } else {
                window.alert("entrada negada !! usario e senha incorretos")
            }
            
            
        }
        
      
       
        function pegarSalario(salario,v1,v2,i1,i2){
           
    //   CALCULO VT
    var calculaVt = salario * 0.06
      document.getElementById('VT').value = calculaVt

    //   CALCULO VR
    var calculaVr = salario * 0.035
      document.getElementById('VR').value = calculaVr

    // CALCULO INSS
      if(salario <= 1.412){
        var calculoInss1 = salario * 0.075
        document.getElementById('INSS').value = calculoInss1
      } 

      else if(salario >= 1412.01 || salario <= 2666.68){
        var calculoInss2 = salario * 0.09
        document.getElementById('INSS').value = calculoInss2
      }

      else if(salario >= 2666.69 || salario <= 4000.03){
        var calculoInss3 = salario * 0.12
        document.getElementById('INSS').value = calculoInss3
      }

      else if(salario >= 4000.04|| salario >= 7786.02){
        var calculoInss4 = salario * 0.14
        document.getElementById('INSS').value = calculoInss4
      }

    //   CALCULO IR
        if(salario <= 2259.20 ){
            var calculadora2 = salario * 0 
            document.getElementById('IR').value = calculadora2

        } 
        else if(salario >= 2259.21 || salario <= 2826.65){
            var calculoIR1 = salario * 0.075
            document.getElementById('IR').value = calculoIR1
            
        } 
        else if(salario >= 2826.66 || salario <= 3751.05){
            var calculoIR2 = salario * 0.15
            document.getElementById('IR').value = calculoIR2

        } 
         else if(salario >= 3751.06 || salario <= 4664.68){
            var calculoIR3 = salario * 0.225
            document.getElementById('IR').value= calculoIR3

        } 
        else if(salario >= 4664.69){
            var calculoIR4 = salario * 0.275
            document.getElementById('IR').value= calculoIR4
        }
                 // CALCULO TOTALDESCONTO
    
    v1 = parseFloat(document.getElementById("VT").value)
    v2 = parseFloat(document.getElementById("VR").value)
    i1 = parseFloat(document.getElementById("INSS").value)
    i2 = parseFloat(document.getElementById("IR").value)
    totalDesc = v1 + v2 + i1 + i2
    document.getElementById('totalDesc').value = totalDesc
    // CALCULO SALARIOLIQUIDO
    var calculoLiquido = salario - totalDesc
        document.getElementById('salarioLiquido').value = calculoLiquido
    
    
    }
 
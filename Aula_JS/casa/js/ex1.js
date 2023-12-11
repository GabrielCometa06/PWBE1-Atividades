//alert("olá");
//alert("primeiro conteudo");
//alert("segundo conteudo");
//console.log("primeiro conteúdo do console");  mostrar o console com informações
//console.log("segundo conteúdo do console");

//var nome = prompt("qual o seu nome?"); cria para digitar
//console.log(nome);      pega o nome que digitou aqui em cima

/*
var quantidade = 1;
var nome = "fox";
var decimal = 1.34;
var verdadeiro = true;

console.log(typeof quantidade);
console.log(typeof nome);
console.log(typeof decimal);
console.log(typeof verdadeiro); */



/* 
var numero = '12.46';
numero = parseFloat (numero); 
var outroNumero = '2';
outroNumero = parseFloat (outroNumero);
window.document.write("tipo do dado " + outroNumero + " = " + typeof(outroNumero) + "<br>");
window.document.write("tipo de dado " + outroNumero + " = " + typeof (outroNumero));
window.document.writeln("Resultado: " + resultado);
*/

/*
var numero = 12;
numero = numero.toString(); 
var outroNumero = 2.2;
outroNumero = outroNumero.toString();
window.document.write("tipo do dado " + numero + " = " + typeof(numero) + "<br>");
window.document.write("tipo de dado " + outroNumero + " = " + typeof (outroNumero));
window.document.writeln("Resultado: " + resultado); */


/*
var diferente= (1 != 1);
console.log(diferente);

var verdadeiro= (1 != 2);
console.log(verdadeiro);   */


/*
var salarioMensal = 1000;
var salarioAnual = 13*salarioMensal + salarioMensal*0.10;
salarioMensal*0.10;
console.log(salarioAnual);    */


/*
var divisor = 0;
var dividendo = 1;
if (divisor != 0) {
    var resultado = dividendo / divisor;
    console.log(resultado);
} else {
    console.log("não posso executar um divisão 0!");
}   */


/*
var tipoDoFuncionario = "estagiario";
var salarioMensal = 700;
if (tipoDoFuncionario == "estagiario" || tipoDoFuncionario == "clt") {
    if (salarioMensal > 0 && salarioMensal < 1000) {
        var salarioAnual = 13*salarioMensal + salarioMensal*0.05;
        console.log(salarioAnual); 
    } else {
        if (salarioMensal < 2000) {
            var salarioAnual = 13*salarioMensal + salarioMensal*0.10;
            console.log(salarioAnual);
        }
    }
}      */



/*
var dia;
switch (new Date().getDate) {
    case 0:
        dia = "domingo";
        break;
    case 1:
        dia = "segunda";
        break;
    case 2:
        dia = "terça";
        break;
    case 3:
        dia = "quarta";
        break;
    case 4:
        dia = "quinta";
        break;
    case 5:
        dia = "sexta";
        break;
    case 6:
        dia = "sabado";
        break;

    default:
        break;
}
console.log("hoje é " + dia); */


/*
const carro = ["Fiat", "Volvo", "BMW"];
for (var i=0;i<carro.length;i++){
    document.write(carro[i] + "<br>");
}
document.getElementById("demo").innerHTML = carro;


var txt = "";
var pessoa = {fname:"John", name:"josé", idade:25};

for (var x in pessoa) {
    txt = txt + " " + pessoa[x];
}   */



var somapares = 0;
var i = 1;

while (true) {
    if (i % 2 != 0) 
        //continue;
        somapares += i;
        if (i == 10) 
            break;
        i++;
}
window.document.write(somapares);
console.log(somapares);
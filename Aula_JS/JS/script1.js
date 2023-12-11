
///////////LISTA////////////
/*var pessoas = ["Maria", "Fernanda", "Larissa", "Jose" ];
var objetos = ["garfo", "colher"];
var frutas = ["uva", "maça", "abacaxi"];
var cores = ["rosa", " azul", " vermelho", " amarelo", " laranja", " verde", " branco "]
 

pessoas[0];                                     
//representa a maria
pessoas.length;                                 
//resultado igual a 4
objetos[objetos.length] = "faca";               
//add um elemento ao array
frutas.indexOf("uva");                          
//resultado 0


cores[3];
cores.length;
cores[cores.length] = "preto", "roxo";
cores.indexOf("amarelo");


document.write("A lista é: " + cores);
document.write("<br>A cor na posição 3 é: " + cores[3]);
document.write("<br>Quantidade de elementos na lista: " + cores.length);
document.write("<br>A cor verde está na posição: " + cores.indexOf("verde"));*/

 
//////////DATA////////////
/*var d = new Date("october 13, 2015 11:13:00");
d = new Date(0);
var d = new Date(99, 5 , 24, 11, 33,30, 0);
document.getElementById("D3").innerHTML = d;                       
//o mes vai de 0 (janeiro) a 11(dezembro)
var d = new Date(2014, 7, 20);                                     
// 20 de agosto de 2014
document.getElementById("D4").innerHTML = d;


d = new Date();
d.toUTCString();                                                    
//fri, 03 mar, 2023, 02:11:00
document.write("<br>" + d.toUTCString());
d.toDateString();                                                   
//thu, 02 , 2023
document.write("<br>" + d.toDateString());

 
d.toLocaleDateString();                                             
//02/23/2023
document.write("<br>" + d.toLocaleDateString());
d.toLocaleTimeString();
document.write("<br>" + d.toLocaleTimeString('pt-PT', {hour12: false}));             
//23:11:00*/


///////////DATAS 2/////////////////
/*var hoje, prazo;
hoje = new Date();
prazo = new Date();
prazo.setFullYear(2023, 10, 18);
var dia = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
document.write("<p>hoje é: " + dia[hoje.getDay()] + ", " + hoje.getDate() + "/" + (hoje.getMonth()) + "/" +
hoje.getFullYear() + "</p>");
document.write("<p>O prazo é: " + dia[prazo.getDay()] + ", " + prazo.getDate() + "/" + (prazo.getMonth()
 + 1) + "/" + prazo.getFullYear() + "</p>");*/


 //////////tratamento de exceções///////////
 /*try{
    var x = "";
    if(x == "") throw "vazio";
    if(isNaN(x))  throw "nao e um numero";
    if(x == 10) x;
    console.log(x);
    console.write(x);
 }catch(err){
    console.log("input is " + err);
    document.write("input is " + err);
 }*/


 ////////////tratamento 2/////////////
/* var dividendo = 10;
 var divisor = 0;
 try{
    if(divisor == 0){
        throw new
        Error("erro: divisao por zero nao e permitida");
    }
    var resultado = dividendo/divisor;
    console.log("Resultado: ", resultado);
    //adddlert("ERRO!!!");                                               
    //adddlert nao existe
 }
 catch(err){
    console.log(err.message)
 }*/

//////////tratamento 3////////
    /*function myFunction(){
        var message, x;
        message= document.getElementById("message");
        message.innerHTML = "";
        x = document.getElementById("demo").value;
    try{
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw " too low";
    if(x > 10) throw " too right";
}
catch(err){
    message.innerHTML = "input is" + err;
}    
}*/

////////////tratamento 3//////////////

try{
    adddlert("ERRO!!");
}catch(err){
    document.write("<br>" + err.message);
}finally{
    document.write("<br>Sera mostrado mesmo com erro");
}


//////////mudar cores (blur)//////////// 
/*function blurFunction(){
    document.getElementById("myInput").style.background="cyan";
}*/


///////////mudar cores 2 /////////// 

/*function myFunction(val){
    alert("mudou para " + val)
}*/

/////////onload///////////
/*function loadFunction(){
    alert("Pagina carragada!!!")
}*/

////////qnd faz coisa com o mouse////////
function mouseDown(){
    document.getElementById("myP").style.color = "cyan";
}
function mouseUp(){
    document.getElementById("myP").style.color= "red";
}
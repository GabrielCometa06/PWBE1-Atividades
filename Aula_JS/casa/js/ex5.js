/*var titulo = document.getElementById("titulo"); //selecione elemento

var conteudo = titulo.textContent; // seleciona o conteido do texto elemento

console.log(conteudo);    //imprime "meu cabesalho"

var x = document.getElementsByTagName("li");
document.getElementById("demo").innerHTML = x[0].innerHTML;
console.log("pegando " + x[1].innerHTML);
*/
/*
var elemento = document.getElementsByClassName("exemplo2");
elemento[0].innerHTML = "testando classe";
console.log("js" + elemento[0].innerHTML);
*/
/*
var num = document.getElementsByName("cor").length;
document.getElementById("seletor").innerHTML = num;
console.log("JS numero = " + num);
*/
/*
var element = document.getElementById("cabecalho");
element.innerHTML = "novo cabeçalho";

document.getElementById("imagem").src = "img/2.jfif";


document.getElementById("p2").style.color = "blue";
*/
/*
var txt = document.getElementById("intro").childNodes[0].textContent;
document.write(txt);
*/
/*
var x = document.getElementById("left");
var txt = "";
for(var i = 0; i < x.childNodes.length; i++){
txt += "Nodo " + x.childNodes[i].nodeName + "valor: " +
  x.childNodes[i].nodeValue + "<br>";
} 
alert (txt);
*/
/*
var para = document.createElement("p");
var node = document.createTextNode("Esse é novo.");
para.appendChild(node);

var element = document.getElementById("left");
element.appendChild(para);  */

/*
var para=document.createElement("p");
var node=document.createTextNode("esse é novo.");
para.appendChild(node);

var element=document.getElementById("div1");
var child=document.getElementById("p1");
element.insertBefore(para,child);
*/

/*
alert ('buummmmmmmmm');
if (confirm('alerta confirmado?')) 
        alert('positivo central');
    else
        alert('negativo central');
    */
    /*
    document.write(document.images.length);
    */
    /*
    function funcao() {
        alert("hello world1");
    }
    */
    /*
   function bemvindo(nome1,nome2) {
    alert("bemvindo " + nome1 + " e " + nome2);
   }
   */

   function multiplicacao(a,b) {
    return a*b;
   }

   document.getElementById("resposta").innerHTML = multiplicacao(4,3);
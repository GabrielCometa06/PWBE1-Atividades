var myVar = setInterval(myTimer,1000);
function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
function anuncio() {
    var carro = "anuncio do youtube";
    document.getElementById("demo1").innerHTML = carro;
    document.body.style.backgroundImage = "url(img/1.png)";

}




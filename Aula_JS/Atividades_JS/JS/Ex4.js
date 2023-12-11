function apertar(){
    var num = document.getElementById("resultado").value;
    var centena;

    Number(resultado);
    console.log(resultado);

    if (num >= 100){
        centena = Math.floor(resultado/100);
        console.log(centena);
        sobra = resultado % 100;
    if (sobra >= 50){
        dezena = Math.floor(sobra2/10);
        console.log(dezena);
    }
}
if (sobra < 50){
    dezena = Math.floor(sobra/10);
    console.log(dezena);
}

}

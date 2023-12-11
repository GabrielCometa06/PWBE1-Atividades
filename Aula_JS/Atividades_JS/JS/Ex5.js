function verificar(){
    var par = document.getElementById("par").value;
    var resto;

    Number(par);
    resto = par % 2;

    if (resto == 0){
    //document.write("Resposta: é Par");
    document.getElementById("resultado").innerHTML = "Resposta: " + par + " é par";
    }
    if (resto > 0){
    //document.write("Resposta: é Ímpar");
    document.getElementById("resultado").innerHTML = "Resposta: " + par + " é ímpar";
    }
}
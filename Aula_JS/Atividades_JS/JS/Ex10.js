function mostrar(){
    let i = document.getElementById("valor"); 
    let caixinha = parseInt(document.getElementById("caixinha").value);
    console.log(typeof(caixinha));
    
    for (i = 0; i < 11; i++){
        let p = document.getElementById("p").innerHTML;
        p = p + "<li>" + caixinha + " X " + i + " = " + (caixinha * i) + "</li>" + "<br>";
        document.getElementById("p").innerHTML = p;
    }
}
function mostrar(){
    let i = document.getElementById("valor"); 
    let caixinha = parseFloat(document.getElementById("caixinha").value);
    console.log(typeof(caixinha));
    
    for (i = 1; i <= 10; i++){
        let p = document.getElementById("p").innerHTML;
        let resu = caixinha/i;
        p = p + "<li>" + i +  "x de R$: " + caixinha + " = " + resu.toFixed(2) + "</li>" + "<br>";
        document.getElementById("p").innerHTML = p;
    }
}
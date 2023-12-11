/*
let nome = document.getElementById("pro");
let preco = document.getElementById("pro2");

preco = Math.trunc(preco.value);

let para = document.createElement(b);
let node = document.createTextNode(" o medicamento " + nome.value + " leve 2 e saia por " + preco);
para.appedChild(node);
var element = getElementById ("pre");
para.appedChild(para);
*/

document.getElementById("btMostrar").addEventListener("click", function(){
    let inMedicamento = document.getElementById("inMedicamento").ariaValueMax;
    let inPreco = document.getElementById("inPreco").value;
    if (isNaN(inPreco)){
        alert("Digite um numero");
        return;
    }
    let promocao = (inPreco*2) - (inPreco*2*0.10);
    document.getElementById("outMedicamento").textContent = "Promoção do " + inMedicamento;
    document.getElementById("outPromocao").textContent = "leve 2 por semana" + promocao.toFixed(2);
})



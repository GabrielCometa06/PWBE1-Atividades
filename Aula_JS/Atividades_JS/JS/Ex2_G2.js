//----------TESTE 1

/*let noticia = [];
function adicionar(){
    let p = document.getElementById("p").value;
    let lista = document.getElementById('li').value;
    lista.innerHTML = p;
    lista.push(mostrar.value);
}

function mostrar(){
    let lista = document.getElementById('li').value;
    lista.textContent = noticia;
}
*/

//----------TESTE 2

let lista = document.getElementById("lista").value;
let mostrar = document.getElementById("mostrar").value;
let noticia = [];

function adicionar(){
    noticia.push(mostrar.value);
    alert ("Adicionado");
}

function mostrar(){
    lista.textContent = noticia + "\n" + "<br>";
    console.log(noticia);    
}
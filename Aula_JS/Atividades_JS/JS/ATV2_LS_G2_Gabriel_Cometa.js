/*let lista = document.getElementById("lista").value;
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

function exibir(){
    noticia.push(mostrar.value);
    lista.textContent = "Notícia Adicionada" + noticia;
    localStorage.setItem ('lista', JSON.stringify(noticia));
    localStorage.getItem(noticia);
}
*/

/*
let lista = 'lista';
localStorage.setItem(lista, 'value');

let minhaLista = localStorage.getItem(lista);
localStorage.setItem(lista, 'new value');
//criar itens
let adicionarNoticias = [];
localStorage.setItem(lista, JSON.stringify(adicionarNoticias));

//ler itens
let lerLista = JSON.parse(localStorage.getItem(adicionarNoticias));
*/

function adicionar(){
    const adicionar = document.getElementById("adicionar").value;
    const exibir = document.getElementById("mostrar").value;

    if (adicionar && exibir){
        localStorage.setItem(adicionar, exibir);
        alert("Os dados foram adicionados!");
    }
}

function mostrar(){
   // if (adicionar && exibir){
        localStorage.getItem(adicionar,exibir);
        console.log(adicionar, exibir);
    }
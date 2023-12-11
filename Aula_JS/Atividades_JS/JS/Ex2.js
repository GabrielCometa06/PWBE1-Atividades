function adicionar(){
    var nome = prompt ('nome: ');
    var email = prompt ('email: ');
    var novali = document.createElement("p");
    novali.innerHTML = "nome: " + "email: " + email;
    var element = document.getElementById("list");
    element.appendChild(novali);

}
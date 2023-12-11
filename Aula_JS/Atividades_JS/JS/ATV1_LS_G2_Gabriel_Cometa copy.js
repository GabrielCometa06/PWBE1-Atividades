//Cada vez que o usuário clicasse no botão, 
//gostaria que salvasse a informação num localStorage diferente e tentei fazer com for, 
//e ir incrementando 1 a cada vez que clica no botão

/*for ( int i = 0; i < 10; i++){
    localStorage.setItem('radar' +i, $ ('.divCarro').html()); 
    let teste = localStorage.getItem('radar');

    }
    localStorage.setItem('index', i);

    function adicionar(dados){
        localStorage.getItem('velocidade');
        valores.push(dados);
    }
*/
let carro = document.getElementById("carro").value;
let v = [];
function carro(){
    let radar = 80;
    let carro = document.getElementById("carro").value;
    let mensagem = document.getElementById("mensagem");
    let multaLeve = 0.20;
    let multaMedia = 0.30;
    let multaGrave = 0.40;
    Number(carro);
    Number(radar);

    if ( carro < (radar*multaLeve) + radar ){
        mensagem.textContent = "Você não foi multado!"
    }
    if ( carro > (radar*multaLeve) + radar && carro < (radar*multaMedia) + radar){
        mensagem.textcontent = "Multa leve!"

    }
    if ( carro > (radar*multaMedia) + radar && carro < (radar*multaGrave) + radar){
        mensagem.textContent = "Multa media!"
    }
    if ( carro > (radar*multaGrave) + radar){
        mensagem.textContent = "Multa grave!"
    }

    return JSON.parse(localStorage.getItem(carro)) || [];

    function exibir(){
        v.push(carro.value);
        lista.textContent = "Velocidade captada" + v;
        localStorage.setItem ('carro', JSON.stringify(v));
        localStorage.getItem(v);
        alert("exibir");
    }

}
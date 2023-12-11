//prompt("Adicione um valor do Radar")
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

}
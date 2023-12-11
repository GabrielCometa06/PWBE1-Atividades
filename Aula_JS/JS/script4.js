function limpa_form(){
    document.getElementById('RUA').value = ("");
    document.getElementById('BAIRRO').value = ("");
    document.getElementById('CIDADE').value = ("");
    document.getElementById('ESTADO').value = ("");
}

function atualiza_campos(conteudo){
    if (!("erro" in conteudo)){
        document.getElementById('RUA').value() = conteudo.RUA;
        document.getElementById('BAIRRO').value() = conteudo.BAIRRO;
        document.getElementById('CIDADE').value() = conteudo.CIDADE;
        document.getElementById('ESTADO').value() = conteudo.ESTADO;
    }else{
        limpa_form();
        alert ("CEP não foi encontrado!");
    }
}

function pesquisacep(valor){
    //variavel cep recebe apenas valores decimais (inteiros)
    var cep = valor.replace(/\D/g,'');
    //condição de validação
    if (cep != ""){
        var validacep = /^[0-9]{8}$/;
        if (validacep.test(cep)){
            document.getElementById('RUA').value = "carregando";
            document.getElementById('BAIRRO').value = "carregando";
            document.getElementById('CIDADE').value = "carregando";
            document.getElementById('ESTADO').value = "carregando";
    //adicionou informação de elemento
    var elemento = document.createElement('script');
    elemento.src = 'https://viacep.com.br/' + cep + '/json/?callback=atualiza_campos';
    //insere o script no documento e carrega seu conteudo
    document.body.appendChild(elemento);
    }else{
        limpa_form();
        alert("Formato de CEP inválido!");
    }//fecha if
    }else{
        limpa_form();
    }
};


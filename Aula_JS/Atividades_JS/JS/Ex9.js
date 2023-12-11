//array para armazenar dados

let listaProdutos = [];
//função para adicionar Produtos
function adicionarProduto(){
    const nome = document.getElementById("nome-produto").value;
    const preco = parseFloat (document.getElementById("preco-produto").value);
    if (nome && preco){
        listaProdutos.push({nome , preco});
        atualizarProduto();
        limparCampos();
    }
}

    //função atualizar 
    function atualizarListaProduto(){
        const lista = document.getElementById("lista-produto");
        lista.innerHTML = '';
        listaProdutos.forEach((produto, index) =>{
            const li = document.createElement('li');
            li.textContent = `${produto.nome} - R$ ${produto.nome.toFixed(2)};`
            //Adiciocar botão para edição de valores
            const botaoEditar = document.createElement('button');
            botaoEditar.textContent = 'Editar Dados';
            botaoEditar.onclick = () => preencherFormularioEditar(index)
            li.appendChild(botaoEditar);
            lista.appendChild(li);
        });
        atualizarListaExclusao();
    }
    //formulario editar
    function preencherFormularioEditar(index){
        const produto = listaProdutos[index];
        document.getElementById("editar-nome-produto").value = produto.nome;
        document.getElementById("editar-preco-produto").value = produto.preco;
    }
    //função atualizar
    function atualizarListaExclusao(){
        const selectExcluir = document.getElementById("excuir-produto");
        selectExcluir.innerHTML = '';
        listaProdutos.forEach((produto,index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = produto.nome;
            selectExcluir.appendChild(option);
        });
    }
    //atualizar produto
    function atualizarProduto(){
        const index = document.getElementById("exclui-produto").value;
        const nome = document.getElementById("editar-nome-produto").value;
        const preco = parseFloat(document.getElementById("editar-nome-produto").value);
        if (index !== '' && nome && preco){
            listaProdutos[index] = {nome, preco};
            atualizarListaProduto();
            limparCampos();
        }
    }
    //limpar campos
    function limparCampos(){
        document.getElementById("nome-produto").value = "";
        document.getElementById("preco-produto").value = "";
    }
    //limpar forms
    function limparCampos(){
        document.getElementById("editar-nome-produto").value = "";
        document.getElementById("editar-preco-produto").value = "";
    }
    //função excluir
    function excluirProduto(){
        const index = document.getElementById("excluir-produto").value;
        if (index !== ''){
            listaProdutos.splice(index,1);
            atualizarListaProdutos();  
        }
    }
    window.onload = function(){
        atualizarListaProdutos();
    };
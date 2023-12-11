function categorizarAluno(){
    let idade = parseInt(document.getElementById("idade").value);
    retornarTracos();

    if (idade <= 12){
        document.getElementById("exibirCategoria").innerHTML = " Categoria: Infantil";
    }
    if (idade > 13 && idade < 18){
        document.getElementById("exibirCategoria").innerHTML = " Categoria: Juvenil";
    }
    if (idade > 18){
        document.getElementById("exibirCategoria").innerHTML = " Categoria: Adulto";
    }

}

    function retornarTracos(){
        
        let nome = document.getElementsByTagName("nome").value;
        nome = nome.split('');
        for (let idade = 0; idade < nome.length; i++){
            let letras = nome[idade].split('');   
            tracos = "";
            tracos = tracos + " " + "-".repeat(letras.length);
            document.getElementById("exibirCategoria").innerHTML += tracos;
        }
        
        
        
        
        /*
        let traco ='';
        nome.split(' ');
        for (let i = 0; i < nome.length;i++){
            let p = nome[0].split('');
            traco = traco + " " + "-".repeat(p.length);
            document.getElementById("p").innerHTML = traco;

            let nome = document.getElementById("nome").value;
           let traco = nome.replace(/[a-zA-Z ]/g, "-");
        
            traco = nome(nome);
            console.log(traco);
        
        }*/
    }




    

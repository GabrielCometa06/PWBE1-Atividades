function valida() {
var senha = document.getElementById("senha").value;            
var mensagem = document.getElementById("mensagem");            
           
if (senha == " "){
mensagem.textContent = "Necessário adicionar uma senha!"
}

if (senha.length > 8 || senha.length < 15) {
mensagem.textContent = "Sua senha deve ser maior que 8 e menor que 15 caracteres!";                 
return;             
} 
            
if (!/[A-Z]/.test(senha)) {                 
mensagem.textContent = "Sua senha deve conter pelo menos uma letra maiúscula! experimente adicionar no início.";                 
return;             
}                          
           
if (!/[0-9]/.test(senha)) {                 
mensagem.textContent = "Sua senha deve conter pelo menos um número.";                 
return;             
}    

if (!/[!,@,#,$,%,&,*]/.test(senha)) {                 
mensagem.textContent = "Sua senha deve conter pelo menos um caracter especial.";                 
return;             
} 

mensagem.textContent = "Sua senha é válida!";         
}
const button = document.getElementById('button')
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");
const span = document.querySelectorAll('span');
const input = document.querySelectorAll('.input')


button.addEventListener('click', (e) =>{
    e.preventDefault()
  
    erroDeValidacao()
}
)

nome.addEventListener('blur', function (){
 if(nome.value){
        nome.classList.add("valido")
          span[0].classList.remove("validacao")
        
       }
})

email.addEventListener('blur', function (){
    if(email.value){
           email.classList.add("valido")
             span[1].classList.remove("validacao")
           
          }
   })

   telefone.addEventListener('blur', function (event){
    if(telefone.value){
           telefone.classList.add("valido")
             span[2].classList.remove("validacao")
           
          }
   })

   mensagem.addEventListener('blur', function (){
    if(mensagem.value){
           mensagem.classList.add("valido")
             span[3].classList.remove("validacao")
           
          }
   })


function erroDeValidacao(){
    const span = document.querySelectorAll('span');

    if(nome.value === ''){
        nome.classList.add('error')
        span[0].classList.add("validacao")
    }
    if(email.value === ''){
        email.classList.add("error")
        span[1].classList.add("validacao")

    }
    if(telefone.value === ''){
        telefone.classList.add("error")
        span[2].classList.add("validacao")
    }
    if(mensagem.value === ''){
        mensagem.classList.add("error")
        span[3].classList.add("validacao")
    }

}



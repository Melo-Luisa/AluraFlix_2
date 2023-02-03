let img = document.querySelector("#filme")
let none = document.querySelector("#none")
let img_tela = document.querySelector("#listaFilmes")
let button = document.querySelector("#adicionarFilme")

button.addEventListener('click', ()=>{
    if(img.value == 0){
        none.innerHTML = 'Nada adicionado'
    }
    else {
        none.innerHTML = ''
        img_tela.innerHTML = img_tela.innerHTML + '<img src="' + img.value + '">'
        img.value = ''
    } 
})
  
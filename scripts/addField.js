//procurar o botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)
//quando clicar no botao
//executar um acao
function cloneField() {
    //Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //limpar os campos:
    const fields = newFieldContainer.querySelectorAll('input')

   //para cada campo, limpar
    fields.forEach(function (field) {
        field.value = ""
    })
    
    //colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
// cria uma referencia ao form e aos elementos h3 e h4 (resposta)
const fmr = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = documen.querySelector("h4")

//cria um ouvinte de evento. acionado quando o botao submit for clicado
frm.addEventListener("submit", (e)=> {
    const titulo = frm.inTitulo.value // obtem conteudo dos campos
    const duracao = Number(fmr.inDuracao.value)
    const horas = Math.floor(duracao / 60) //arredonda para baixo o resultado
    const minutos = duracao % 60 // obtem o resto da divisao 
     
    resp1.innerText = titulo //Exibe as respostas 
    resp2.innerText = `${horas} hora(s) e ${minutos} Minutos(s)`
    e.preventDefault() // evitra envio do form
})
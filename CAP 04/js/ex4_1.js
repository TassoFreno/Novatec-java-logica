// cria referencia ao form e elementos de resposta do progama 
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")


// cria um "ouvinte" de evento, acionado quando o botão submit for clicado 
frm. addEventListener("submit", (e) => {
    e.preventDefault() // evita envio do form
    const nome = frm.inNome.value // obtem valores do form
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const media = (nota1 + nota2) / 2 // calcula a media das notas 
    resp1.innerText = `Média das Notas ${media.toFixed(2)}`

    //abaixo. Criando condições

     if (media >= 7) {
        resp2.innerText = `Parabéns ${nome}! Você foi AProvado!(a)`
        resp2.style.color = "blue"
     } else {
        resp2.innerText = `Ops ${nome} ...Você foi Reprovado(a) `
        resp2.style.color = "red"
     }
})
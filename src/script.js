let textarea = document.getElementById('input__textarea')
let botaoCriptografar = document.getElementById('botaoCriptografar')
let botaoDescriptografar = document.getElementById('botaoDescriptografar')
let infoNotResponse = document.getElementById('content__message')
let botaoCopiar = document.getElementById('botaoCopiar')
botaoCopiar.style.display = 'none'

let textoResposta = document.getElementById('resposta__criptografada')
if (textoResposta !== null) textoResposta.style.display = 'none'

function criptografar() {
  if (textarea.value === '') {
    return
  }

  let textoCriptografado = textarea.value
    .replace('e', 'enter')
    .replace('i', 'imes')
    .replace('a', 'ai')
    .replace('o', 'ober')
    .replace('u', 'ufat')

  if (textoCriptografado) {
    textarea.value = ''
    infoNotResponse.style.display = 'none'
    textoResposta.style.display = 'block'
    textoResposta.value = textoCriptografado
    botaoCopiar.style.display = 'block'
  }
}

function descriptografar() {
  if (textarea.value === '') {
    return
  }

  let textoDescriptografado = textarea.value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z]/g, ' ')
    .replace('enter', 'e')
    .replace('imes', 'i')
    .replace('ai', 'a')
    .replace('ober', 'o')
    .replace('ufat', 'u')

  if (textoDescriptografado) {
    textarea.value = ''
    infoNotResponse.style.display = 'none'
    textoResposta.style.display = 'block'
    textoResposta.value = textoDescriptografado
  }
}

function copiarTexto() {
  if (textoResposta) {
    navigator.clipboard.writeText(textoResposta.value)
    botaoCopiar.style.display = 'none'
    textoResposta.style.display = 'none'
    infoNotResponse.style.display = 'flex'
  }
}

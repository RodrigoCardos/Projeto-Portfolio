// function do switch para alternar entre os temas
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir o avatar
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Rodrigo Cardoso de roupa preta")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Rodrigo Cardoso de roupa preta")
  }
}

function copyText() {
  // selecionar o elemento de input de texto
  var input = document.getElementById("texto")

  // selecionar o conteudo do input
  input.select()
  input.setSelectionRange(0, 99999) // para disposistivos moveis

  // copiar o conteudo para a area de transferencia
  navigator.clipboard
    .writeText(input.value)
    .then(function () {
      // alertar o usuario que o conteudo foi copiado
      alert("E-mail copiado: " + input.value)
    })
    .catch(function (error) {
      console.error("Erro ao copiar texto: ", error) // em caso de erro, será exibido no console.
    })
}

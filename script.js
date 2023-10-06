function checkDevice() {
	if (
		navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i) ||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/iPod/i) ||
		navigator.userAgent.match(/BlackBerry/i) ||
		navigator.userAgent.match(/Windows Phone/i)
	) {
		return true // está utilizando um celular
	} else {
		return false // não é celular, provavelmente é desktop
	}
}

// function do switch para alternar entre os temas
function toggleMode() {
	const html = document.documentElement
	html.classList.toggle("light")

	// pegar a tag img
	const img = document.querySelector("#profile img")

	// substituir o avatar
	if (html.classList.contains("light")) {
		//se tiver light mode, adicionar a imagem light
		img.setAttribute("src", "./avatar-light.png")
		img.setAttribute("alt", "Foto de Rodrigo de roupa preta")
	} else {
		// se tiver sem light mode, manter a imagem normal
		img.setAttribute("src", "./avatar.png")
		img.setAttribute("alt", "Foto de Rodrigo de roupa preta")
	}
}

let isTextOriginal = true // Variável para controlar o estado do texto
// function para copiar o email no desktop, mostrar o email no celular e direcionar para enviar o email
function buttonEmail() {
	function enviarEmail() {
		// Direciona para mandar e-mail já que o usuário está no celular
		document
			.getElementById("meuEmail")
			.setAttribute("href", "mailto:rodrigcardoso1@gmail.com")
	}

	// Alternar o botão do e-mail no mobile
	const meuEmail = document.getElementById("meuEmail")

	// Verifica se o texto atual é o texto original
	if (meuEmail.textContent === "E-mail para contato") {
		meuEmail.textContent = "rodrigcardoso1@gmail.com"
	} else {
		meuEmail.textContent = "E-mail para contato"
	}

	// Essa função consiste em duas tarefas, uma para desktop e outra para mobile.
	if (checkDevice() === false) {
		// para desktop, selecionar o elemento de input de texto
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
	} else {
		document.getElementById("meuEmail").addEventListener("click", enviarEmail())
	}
}

document.getElementById("shareMobile").addEventListener("click", function () {
	// Verifica se o navegador suporta a API de compartilhamento
	if (navigator.share) {
		navigator
			.share({
				title: "Portfólio de Rodrigo Cardoso",
				url: "#",
			})
			.then(() => {
				console.log("Link compartilhado com sucesso.")
			})
			.catch((error) => {
				console.error("Erro ao compartilhar o link:", error)
			})
	}
})

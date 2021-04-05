function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  if(filmeFavorito.endsWith('.jpg')) {  
    listarFilmesNaTela(filmeFavorito)
  } else {
    alert("Imagem inválida")
  }
  campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme) {
  var listafilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listafilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}

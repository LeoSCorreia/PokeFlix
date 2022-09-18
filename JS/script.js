function adicionarFilme() {
  var url = document.getElementById("filme").value;

  if (url.endsWith(".jpg") || url.endsWith(".png")) {
    listarFilmeNaTela(url);
  } else {
    alert("Endereço de filme Invalido!");
  }
  document.getElementById("filme").value = "";
}
function listarFilmeNaTela(filme) {
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var listaFilmes = document.getElementById("listaFilmes");
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilmeFavorito;
}

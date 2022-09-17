var listaDeFilmes = [
  "https://i.im.ge/2022/09/18/126ecJ.yKFaC1fj4hzEOrMzvIYuuZyCTx8-185x278.jpg",
  "https://i.im.ge/2022/09/18/12NMey.Mewtwo-Contra-Ataca.jpg",
  "https://i.im.ge/2022/09/18/12N051.Giratina-and-the-Sky-Warrior-rerelease.webp",
];

document.ready = () => {
  for (var i = 0; i < listaDeFilmes.length; i++) {
    document.write("<img src=" + listaDeFilmes[i] + "> ");
  }
};
document.ready();
var image = document.getElementById("Filmes");

function confirmar() {
  var url = document.getElementById("URL").value;
  var verif = listaDeFilmes.includes(url);

  if (verif == true) {
    alert("Filme já adicionado");
  } else {
    listaDeFilmes.push(url.value);
    // var teste = document.getElementById("filmes");
    // var teste2 = "<img src=" + url.value + "> ";
    // teste.innerHTML += teste2;
  }
}

var listaDeFilmes = [
  "https://i.im.ge/2022/09/18/126ecJ.yKFaC1fj4hzEOrMzvIYuuZyCTx8-185x278.jpg",
  "https://i.im.ge/2022/09/18/12NMey.Mewtwo-Contra-Ataca.jpg",
  "https://static.wikia.nocookie.net/pokepediabr/images/0/08/Giratina_and_the_Sky_Warrior_rerelease.jpg/revision/latest/scale-to-width-down/250?cb=20161216180857&path-prefix=pt-br",
];
var image = document.getElementById("Filmes");

for (var i = 0; i < listaDeFilmes.length; i++) {
  document.write("<img src=" + listaDeFilmes[i] + ">");
}

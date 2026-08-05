const btnAlterar = document.querySelector("#btn-alterar");
const btndesfazer = document.querySelector("#btn-desfazer");

const corpoDaPagina = document.body;

btnAlterar.addEventListener("click", function () {
  corpoDaPagina.style.backgroundColor = "black";
  corpoDaPagina.style.color = "white";
});

btndesfazer.addEventListener("click", function () {
  corpoDaPagina.style.backgroundColor = "white";
  corpoDaPagina.style.color = "black";
});

const btnTraduzir = document.querySelector("#btn-traduzir");
const btnOriginal = document.querySelector("#btn-original");
const titulo = document.querySelector("h1");
const paragrafo = document.querySelector("P");

btnTraduzir.addEventListener("click", function () {
  titulo.textContent = "por que usamos?";
  paragrafo.textContent =
    "É um fato há muito estabelecido que o leitor se distrai com o conteúdo legível de uma página ao observar o seu layout.";
});

btnOriginal.addEventListener("click", function () {
  titulo.textContent = "Why do we use it?";
  paragrafo.textContent =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
});

const btnAdicionar = document.querySelector("#btn-adicionar");
const btnRemover = document.querySelector("#btn-remover");

btnAdicionar.addEventListener("click", function () {
  const imagem = document.createElement("img");

  imagem.src = "planeta.jpg";
  imagem.alt = "planeta";
  imagem.style.width = "500px"

  const section = document.querySelector("section");

  section.append(imagem);


});

btnRemover.addEventListener("click", function(){
   const imagem = document.querySelector("img")

   imagem.remove()
})
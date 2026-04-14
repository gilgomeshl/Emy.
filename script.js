// Controle das seções
function mostrarSecao(id) {
  const secoes = document.querySelectorAll('.secao');
  const botoes = document.querySelectorAll('nav button');

  secoes.forEach(secao => secao.classList.remove('ativa'));
  document.getElementById(id).classList.add('ativa');

  botoes.forEach(botao => botao.classList.remove('active'));
  event.target.classList.add('active');
}

function mostrarMensagem() {
  document.getElementById('mensagem').style.display = 'block';
}

// Galeria com lightbox + carrossel + slideshow
let fotos = [
  "images/foto3.jpg",
  "images/foto4.jpg",
  "images/foto5.jpg"
];
let fotoAtual = 0;
let slideshowInterval;

function abrirLightbox(index) {
  fotoAtual = index;
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'flex';
  atualizarFoto();

  // Inicia slideshow automático (troca a cada 4 segundos)
  slideshowInterval = setInterval(() => {
    mudarFoto(1);
  }, 4000);
}

function fecharLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  clearInterval(slideshowInterval); // Para o slideshow ao fechar
}

function mudarFoto(direcao) {
  fotoAtual += direcao;
  if (fotoAtual < 0) fotoAtual = fotos.length - 1;
  if (fotoAtual >= fotos.length) fotoAtual = 0;
  atualizarFoto();
}

function atualizarFoto() {
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.classList.remove('mostrar');
  setTimeout(() => {
    lightboxImg.src = fotos[fotoAtual];
    lightboxImg.classList.add('mostrar');
  }, 100);
}

function mostrarSecao(id) {
  const secoes = document.querySelectorAll('.secao');
  secoes.forEach(secao => {
    secao.classList.remove('ativa');
  });
  document.getElementById(id).classList.add('ativa');
}

function mostrarMensagem() {
  document.getElementById('mensagem').style.display = 'block';
}

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

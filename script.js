function mudarPagina(pagina) {
    document.querySelectorAll('.pagina').forEach(p => p.classList.remove('ativa'));
    document.getElementById(pagina).classList.add('ativa');
  }
  
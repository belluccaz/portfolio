  // Matrix effect
  const canvas = document.getElementById("matrix-canvas");
  const ctx = canvas.getContext("2d");

  // Ajusta o tamanho do canvas para ocupar toda a janela
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Cria um array de 256 elementos preenchidos com '1'
  const letters = Array(256).join(1).split("");

  // Função para desenhar o efeito Matrix
  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Define a cor de preenchimento do fundo com um tom preto semi-transparente
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Preenche o canvas com a cor de preenchimento
    ctx.fillStyle = "#0FF"; // Define a cor do texto para um tom azulado
    letters.map((y_pos, index) => {
      const text = String.fromCharCode(65 + Math.random() * 33); // Gera caracteres aleatórios
      const x_pos = index * 10; // Calcula a posição x
      ctx.fillText(text, x_pos, y_pos); // Desenha o texto no canvas
      letters[index] =
        y_pos > canvas.height + Math.random() * 1e4 ? 0 : y_pos + 10; // Atualiza a posição y
    });
  }

$(document).ready(function () {
    
    $('#red-pill').on('click', function() {
        window.location.href = 'portfolio.html';
    });

    // Redireciona para a simulação do prompt ao clicar na pílula azul
    $('#blue-pill').on('click', function() {
        window.location.href = 'neo-prompt.html';
    });
  // Redireciona para o portfólio ao clicar na pílula vermelha
  $("#red-pill").on("click", function () {
    window.location.href = "portfolio.html";
  });

  // Redireciona para a simulação do prompt ao clicar na pílula azul
  $("#blue-pill").on("click", function () {
    window.location.href = "neo-prompt.html";
  });

  setInterval(drawMatrix, 33);
});

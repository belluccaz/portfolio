// Matrix effect
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = Array(256).join(1).split("");

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0F0";
  letters.map((y_pos, index) => {
    const text = String.fromCharCode(65 + Math.random() * 33);
    const x_pos = index * 10;
    ctx.fillText(text, x_pos, y_pos);
    letters[index] =
      y_pos > canvas.height + Math.random() * 1e4 ? 0 : y_pos + 10;
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
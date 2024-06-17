$(document).ready(function () {
  // Smooth scroll (mantenha esta parte se desejar o efeito de rolagem suave)
  $('a[href^="#"]').on("click", function (event) {
    var target = this.hash;
    if (target) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        800,
        function () {
          window.location.hash = target;
        }
      );
    }
  });

  // Redirecionamento para projetos
  $(".project-link").on("click", function () {
    var url = $(this).data("url");
    window.location.href = url;
  });

  // Restante do seu código JavaScript

  // Smooth scroll
  $('a[href^="#"]').on("click", function (event) {
    var target = this.hash;
    if (target) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        800,
        function () {
          window.location.hash = target;
        }
      );
    }
  });

  // Fade-in effect on page load
  $("body").hide().fadeIn(2000);

  // Toggle project descriptions
  $(".toggle-descricao").on("click", function () {
    $(this).siblings(".descricao").slideToggle();
  });

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

  // Define um intervalo para atualizar o efeito Matrix a cada 33 milissegundos
  setInterval(drawMatrix, 33);

  $(".session-content").hide();
  $("#a-origem .session-content").show(); // Mostra a sessão "A Origem" por completo inicialmente

  $(".expand-button").click(function () {
    // Obtém o ID da sessão relacionada ao botão clicado
    var sectionID = $(this).closest("section").attr("id");
    // Expande ou esconde a sessão correspondente
    $("#" + sectionID + " .session-content").slideToggle();
  });

  $(".navbar-link").on("click", function (event) {
    var target = $(this).closest("a").attr("href");
    if (target && target !== "#") {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        800
      );
    }
  });
});

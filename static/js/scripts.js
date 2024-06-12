$(document).ready(function () {
    // Smooth scroll
    $('a[href^="#"]').on("click", function (event) {
        var target = this.hash;
        if (target) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: $(target).offset().top,
            }, 800, function () {
                window.location.hash = target;
            });
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

    setInterval(drawMatrix, 33);

    $(".session-content").hide();
    $("#a-origem .session-content").show(); // Mostra a sessão "A Origem" por completo inicialmente

    $(".expand-button").click(function () {
        // Obtém o ID da sessão relacionada ao botão clicado
        var sectionID = $(this).closest('section').attr('id');
        // Expande ou esconde a sessão correspondente
        $("#" + sectionID + " .session-content").slideToggle();
    });

    $(".navbar-link").on("click", function (event) {
        var target = $(this).attr("href");
        if (target) {
            event.preventDefault();
            $(target + " .session-content").slideToggle();
        }
    });

    // Redireciona ao clicar nos botões de projeto
    $(".project-link").on("click", function () {
        var url = $(this).data("url");
        window.location.href = url;
    });
});

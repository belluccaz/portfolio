$(document).ready(function() {
    const messages = [
        "Wake Up, User...",
        "The Matrix has you...",
        "Follow the white rabbit.",
        "Knock, knock, User.",
        "Redirecting..."
    ];
    let messageIndex = 0;
    let charIndex = 0;
    let typingTimer;

    $('body').hide().fadeIn(2000);

    // Matrix effect
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = Array(256).join(1).split('');

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0F0';
        letters.map((y_pos, index) => {
            const text = String.fromCharCode(65 + Math.random() * 33);
            const x_pos = index * 10;
            ctx.fillText(text, x_pos, y_pos);
            letters[index] = (y_pos > canvas.height + Math.random() * 1e4) ? 0 : y_pos + 10;
        });
    }

    setInterval(drawMatrix, 33);

    function typeMessage() {
        // Adiciona o próximo caractere ao texto atual
        const currentMessage = messages[messageIndex].slice(0, charIndex);
        $('#prompt-message').text(currentMessage);
        charIndex++;
        $('#cursor').toggleClass('hidden'); // Alterna a visibilidade do cursor

        // Verifica se terminou de digitar a mensagem atual
        if (charIndex > messages[messageIndex].length) {
            clearInterval(typingTimer); // Limpa o intervalo de digitação
            $('#cursor').addClass('hidden'); // Esconde o cursor

            // Inicia a próxima mensagem após um intervalo de tempo
            setTimeout(showNextMessage, 1000); // Aguarda 1 segundo antes de iniciar a próxima mensagem
        }
    }

    function showNextMessage() {
        // Se ainda há mensagens para mostrar, inicia a digitação
        if (messageIndex < messages.length) {
            charIndex = 0;
            typingTimer = setInterval(typeMessage, 200); // Intervalo mais lento para a digitação
            messageIndex++;
        } 
        if (messageIndex === 5) {
            // Última mensagem exibida, redireciona para index.html
            window.location.href = 'index.html';
        }
    }

    // Inicia exibindo a primeira mensagem após 2 segundos
    setTimeout(showNextMessage, 2000);
});

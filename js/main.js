const chatContainer = document.getElementById('chat-container');
        const userInput = document.getElementById('user-input');

        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        function sendMessage() {
            const message = userInput.value;
            if (message.trim() === '') return;

            const userMessageElement = document.createElement('p');
            userMessageElement.innerHTML = '<strong>User:</strong> ${message}';
            chatContainer.appendChild(userMessageElement);

            // Aquí puedes agregar la lógica para que el SaludBot responda según el mensaje del usuario
            // Por ahora, simplemente enviaremos un mensaje de ejemplo de respuesta del SaludBot
            setTimeout(function() {
                const doctorMessageElement = document.createElement('p');
                doctorMessageElement.innerHTML = '<strong>SaludBot:</strong> = Entiendo. ¿Puedes proporcionarme más detalles sobre tu situación?';
                chatContainer.appendChild(doctorMessageElement);
            }, 1000);

            userInput.value = '';
        }
    
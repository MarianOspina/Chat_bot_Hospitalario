document.addEventListener("DOMContentLoaded", () => {
    const userInput = document.getElementById('user-input');
    userInput.addEventListener('keypress', async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const userMessage = userInput.value;
            const response = await sendMessage(userMessage);
            displayMessage('Usuario', userMessage);
            displayMessage('SaludBot', response);
            userInput.value = '';
        }
    });
});

async function sendMessage(message) {
    const url = 'http://localhost:11434/api/generate';
    model="llama2";
    const inputToken = '465'; // Reemplaza 'AQUÍ_TU_TOKEN' con tu token de acceso
    const headers = {
        'Authorization': `Bearer ${inputToken}`,
        'Content-Type': 'application/json'
    };
    const body = JSON.stringify({ message });
    try {
        const response = await fetch(url, { method: 'POST', headers, body });
        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error('Error:', error);
        return 'Lo siento, ha ocurrido un error.';
    }
}

function displayMessage(sender, message) {
    const chatContainer = document.getElementById('chat-container');
    const formattedMessage = `<p><strong>${sender}:</strong> ${message}</p>`;
    chatContainer.innerHTML += formattedMessage;
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

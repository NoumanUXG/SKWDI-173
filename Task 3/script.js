let messages = document.getElementById('messages');
let messageInput = document.getElementById('message');
let sendButton = document.getElementById('send');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    let message = messageInput.value.trim();
    if (message !== '') {
        let messageHTML = `
            <li>
                <span>${message}</span>
            </li>
        `;
        messages.innerHTML += messageHTML;
        messageInput.value = '';
    }
}
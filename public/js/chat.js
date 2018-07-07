ws = new WebSocket('ws://' + window.location.host + '/ws');

function initChatClient() {
    const sendMsgBtn = document.getElementById('sendMsgBtn');
    sendMsgBtn.addEventListener('click', () => handleSendMsg());

    ws.onopen = () => {
        // console.log('Opened socket');
    };
    ws.onerror = (event) => {
        console.log(event);
    };

    ws.addEventListener('message', (e) => {
        let messagesElem = document.getElementById('messages');
        const msg = JSON.parse(e.data);

        messagesElem.innerHTML +=
            `
            <div class="room-message">
                <div class="msg-user">
                    ${msg.user}:
                </div>
                <div class="msg-data">
                    ${msg.message}
                </div>   
            `;
    });
}


function handleSendMsg() {
    const msgInput = document.getElementById('message');
    const msg = msgInput.value;

    if (msg !== '') {
        sendMessage(msg);
    }

    // Clear input
    msgInput.value = '';
}


function sendMessage(msg) {
    ws.send(
        JSON.stringify({
            user: 'xmjol',
            message: msg,
        }
    ));
}
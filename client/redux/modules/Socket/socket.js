// Actions
const GET = 'game/sockets/GET';
const CREATE = 'game/sockets/CREATE';
const DELETE = 'game/sockets/DELETE';

const initialState = {};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE:
      console.log(action.socket);
      return Object.assign({}, state, { onj: action.socket });
    case GET:
      return state;
    case DELETE:
      return initialState;
    default: return state;
  }
}

export const deleteSocket = () => ({
  type: DELETE,
});

export const getSocket = () => ({
  type: GET,
});

export const createSocketSuccess = socket => ({
  type: CREATE,
  socket,
});

export const createSocket = () => {
  return (dispatch) => {
    const socket = new WebSocket(`ws://${__SERVER__}/ws`);
    socket.onopen = () => {
      console.log('Opened socket');

      // Messages functionality
      socket.addEventListener('message', (e) => {
        let messagesElem = document.getElementById('messages');
        const msg = JSON.parse(e.data);

        messagesElem.innerHTML += `
            <div class="room-message">
              <div class="msg-user">
                  ${msg.user}:
              </div>
              <div class="msg-data">
                  ${msg.message}
              </div> 
            </div>  
            `;
      });
      dispatch(createSocketSuccess(socket));
    };
    socket.onerror = (event) => {
      console.log(event);
    };
  };
};

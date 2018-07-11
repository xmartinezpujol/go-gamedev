// Actions
const GET = 'game/player/GET';
const DELETE = 'game/player/DELETE';
const MOVE = 'game/player/MOVE';

const initialState = {
  name: 'player1',
  position: {
    x: 0,
    y: 0,
  },
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET:
      return state;
    case DELETE:
      return initialState;
    case MOVE:
      return {
        ...state,
        position: {
          x: action.position.x + state.position.x,
          y: action.position.y + state.position.y,
        },
      };
    default: return state;
  }
}

export const deletePlayer = () => ({
  type: DELETE,
});

export const getPlayer = () => ({
  type: GET,
});

export const movePlayer = position => ({
  type: MOVE,
  position,
});

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import socket from './Socket/socket';
import pc from './Player/character';

const rootReducer = combineReducers({
  pc,
  socket,
  form: formReducer,
});

export default rootReducer;

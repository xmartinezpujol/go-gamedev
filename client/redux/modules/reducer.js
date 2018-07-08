import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import socket from './Socket/socket';

const rootReducer = combineReducers({
  socket,
  form: formReducer,
});

export default rootReducer;

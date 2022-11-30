import {} from ''
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import roodReducer from '.reducers';

const initialState={
  users: [],
};

const middleware = {thunk};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
  
);

export default store;
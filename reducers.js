import { combineReducers } from 'redux';
import { createStore } from 'redux'


const INITIAL_STATE = {
 
};

const store = createStore(myReducer, ['Use Redux'])


const myReducer = (state = INITIAL_STATE, action) => {
 console.log(action.type)
  switch (action.type) {
    case 'SEND_DATA':
    return {mydata:action.payload}

    default:
      return state
  }
};

export default combineReducers({
  myReducer: myReducer,
});
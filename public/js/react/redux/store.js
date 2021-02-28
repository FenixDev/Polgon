import rootReducer from './reducers/rootReducer.js';

function createInitialState() {
  return {
    category: []    
  };
}

function createStore() {
  return Redux.createStore(rootReducer, createInitialState());
}

export { 
    createStore 
};
import categoryReducer from './categoryReducer.js';

function rootReducer(state, action) {
  return {
    categories: categoryReducer(state, action)
  };
}

export default rootReducer;
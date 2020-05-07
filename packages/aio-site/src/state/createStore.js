import { createStore as reduxCreateStore } from "redux";

const reducer = (state, action) => {
  console.log("event", action);
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      count: state.count + 1,
    });
  }

  if (action.type === `NOVEL-GET-LIST`) {
    return Object.assign({}, state, {
      novels: action.data
    });
  }
  return state;
};

const initialState = {
  count: 0,
  novels: [],
  novel: {}
};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;

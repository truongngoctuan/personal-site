import { createStore as reduxCreateStore } from "redux";
import _ from "lodash";

const reducer = (state, action) => {
  console.log("event", action);
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      count: state.count + 1,
    });
  }

  if (action.type === `NOVEL-GET-LIST`) {
    return Object.assign({}, state, {
      novels: action.data,
    });
  }

  if (action.type === `DASHBOARD-CURRENCY-GET`) {
    let dashboardCurrencies = _.cloneDeep(state.dashboardCurrencies);
    dashboardCurrencies[action.data.currencyCode] = action.data.value;

    return Object.assign({}, state, {
      dashboardCurrencies,
    });
  }

  return state;
};

const initialState = {
  count: 0,
  novels: [],
  novel: {},
  dashboardCurrencies: { USD: 23456.789 },
};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;

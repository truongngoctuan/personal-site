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

  if (action.type === `NOVEL-GET`) {
    return Object.assign({}, state, {
      novel: action.data,
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
  novels: [
    {
      codeName: "issth",
      name: "I shall seal the heavens",
      thumbnail: "https://cdn.wuxiaworld.com/images/covers/issth.jpg",
    },
    {
      codeName: "overgeared",
      name: "Overgeared",
      thumbnail: "https://cdn.wuxiaworld.com/images/covers/og.jpg",
    },
    {
      codeName: "renegade-immortal",
      name: "Renegade Immortal",
      thumbnail: "https://cdn.wuxiaworld.com/images/covers/rge.jpg",
    },
    {
      codeName: "a-will-eternal",
      name: "A Will Eternal",
      thumbnail: "https://cdn.wuxiaworld.com/images/covers/awe.jpg",
    },
    {
      codeName: "issth2",
      name: "I shall seal the heavens",
      thumbnail: "https://cdn.wuxiaworld.com/images/covers/issth.jpg",
    },
    {
      codeName: "overgeared2",
      name: "Overgeared",
      thumbnail: "https://cdn.wuxiaworld.com/images/covers/og.jpg",
    },
    {
      codeName: "renegade-immortal2",
      name: "Renegade Immortal",
      thumbnail: "https://cdn.wuxiaworld.com/images/covers/rge.jpg",
    },
  ],
  novel: {
    codeName: "issth",
    name: "I shall seal the heavens",
    thumbnail: "https://cdn.wuxiaworld.com/images/covers/issth.jpg",
  },
  dashboardCurrencies: { USD: 23456.789 },
};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;

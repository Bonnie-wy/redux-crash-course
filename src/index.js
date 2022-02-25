import store from "./store";
import { bugAdded, bugResolved } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));

unsubscribe();

store.dispatch({
  type: actions.BUG_REMOVE,
  payload: {
    id: 1,
  },
});

// import store from "./store";
// import * as actions from "./actionTypes";

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed!", store.getState());
// });

// store.dispatch({
//   type: actions.BUG_ADDED,
//   payload: {
//     description: "Bug1",
//   },
// });

// unsubscribe();

// store.dispatch({
//   type: actions.BUG_REMOVE,
//   payload: {
//     id: 1,
//   },
// });

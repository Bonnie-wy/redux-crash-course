import * as actions from "./actionTypes";

// this reducer is a pure function
// if it's called multiple times, given the same arguments and it gives the same results. It's free of side effects.

let lastId = 0;

// export default function reducer(state = [], action) {
//   if (action.type === actions.BUG_ADDED)
//     return [
//       ...state,
//       {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false,
//       },
//     ];
//   else if (action.type === actions.BUG_REMOVE)
//     return state.filter((bug) => bug.id !== action.payload.id);
//   return state;
// }

// switch case

export default function reducer(state = [], action) {
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case "bugRemoved":
      return state.filter((bug) => bug.id !== action.payload.id);
    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}

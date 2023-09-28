import { movies } from "../../movies";
const stateInitial = {
  sira: 0,
  movies: movies,
};
const reducer = (state = stateInitial, action) => {
  const { type, payload } = action;
  switch (type) {
    case "NEXT_SİRA":
      return {
        ...state,
        sira: state.sira + 1,
      };

    case "PREV_SİRA":
      return {
        ...state,
        sira: state.sira - 1,
      };

    default:
      return state;
  }
};

export default reducer;

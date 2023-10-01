import { movies } from "../../movies";
import { NEXT_SİRA } from "../actions/movieReducerAction";
import { PREV_SİRA } from "../actions/movieReducerAction";

const stateInitial = {
  sira: 0,
  movies: movies,
};
const reducer = (state = stateInitial, action) => {
  const { type, payload } = action;
  switch (type) {
    case NEXT_SİRA:
      return {
        ...state,
        sira: state.sira + 1,
      };

    case PREV_SİRA:
      return {
        ...state,
        sira: state.sira - 1,
      };

    default:
      return state;
  }
};

export default reducer;

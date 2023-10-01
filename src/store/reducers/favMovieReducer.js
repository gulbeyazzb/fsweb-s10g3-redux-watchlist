import { ADD_FAVMOVIE } from "../actions/favMovieReducerAction";
import { DELETE_FAVMOVIE } from "../actions/favMovieReducerAction";

const favMovies = {
  favMovieInitial: [],
};
const reducer = (state = favMovies, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAVMOVIE:
      return { favMovieInitial: [...state.favMovieInitial, payload] };

    case DELETE_FAVMOVIE:
      return {
        favMovieInitial: state.favMovieInitial.filter(
          (movie) => movie.id !== payload
        ),
      };

    default:
      return state;
  }
};

export default reducer;

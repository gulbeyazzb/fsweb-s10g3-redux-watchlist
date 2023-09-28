const favMovieInitial = [];
const ADD_FAVMOVIE = "it adds the film to myList";
const reducer = (state = favMovieInitial, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_FAVMOVIE":
      break;

    default:
      return state;
  }
};

export default reducer;

const favMovieInitial = [];
const reducer = (state = favMovieInitial, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_FAVMOVIE":
      return {
        ...state,
        payload,
      };

    default:
      return state;
  }
};

export default reducer;

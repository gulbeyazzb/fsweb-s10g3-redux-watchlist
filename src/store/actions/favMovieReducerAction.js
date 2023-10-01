export const ADD_FAVMOVIE = "it adds the film to myList";
export const DELETE_FAVMOVIE = "it deletes the film from myList";

export const addfavMovieAction = (movie) => {
  return {
    type: ADD_FAVMOVIE,
    payload: movie,
  };
};

export const deleteFavoriteMovie = (id) => {
  return {
    type: DELETE_FAVMOVIE,
    payload: id,
  };
};

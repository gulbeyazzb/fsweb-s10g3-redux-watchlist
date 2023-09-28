const ADD_FAVMOVIE = "it adds the film to myList";

const addfavMovieAction = (movie) => {
  return {
    type: ADD_FAVMOVIE,
    payload: movie,
  };
};
export default addfavMovieAction;

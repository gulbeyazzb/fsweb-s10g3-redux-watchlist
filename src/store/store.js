import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers";
import logger from "redux-logger";
import { movieWare } from "./middleware/favMovieMiddleware";

export const store = createStore(reducers, applyMiddleware(movieWare, logger));

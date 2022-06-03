import { Get } from "./server";
import {
  CARDS_FILMS,
  CARDS_PEOPLE,
  CARDS_PLANETS,
  CARDS_SPECIES,
  CARDS_STARSHIPS,
  CARDS_VEHICLES,
} from "./types";
import { search_types } from "./utils";

export const Get_all_data = (dispatch) => {
  Get(search_types[0], (res) => {
    dispatch({
      type: CARDS_FILMS,
      payload: res.results,
    });
  });
  Get(search_types[1], (res) => {
    dispatch({
      type: CARDS_PEOPLE,
      payload: res.results,
    });
  });
  Get(search_types[2], (res) => {
    dispatch({
      type: CARDS_PLANETS,
      payload: res.results,
    });
  });
  Get(search_types[3], (res) => {
    dispatch({
      type: CARDS_SPECIES,
      payload: res.results,
    });
  });
  Get(search_types[4], (res) => {
    dispatch({
      type: CARDS_STARSHIPS,
      payload: res.results,
    });
  });
  Get(search_types[5], (res) => {
    dispatch({
      type: CARDS_VEHICLES,
      payload: res.results,
    });
  });
};

import {
  CARDS_FILMS,
  CARDS_PEOPLE,
  CARDS_PLANETS,
  CARDS_SPECIES,
  CARDS_STARSHIPS,
  CARDS_VEHICLES,
} from "../../configs/types";

const initialState = {
  films: [],
  people: [],
  planets: [],
  species: [],
  starships: [],
  vehicles: [],
};

const cards_list = (cards = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CARDS_FILMS:
      return { ...cards, films: payload };
    case CARDS_PEOPLE:
      return { ...cards, people: payload };
    case CARDS_PLANETS:
      return { ...cards, planets: payload };
    case CARDS_SPECIES:
      return { ...cards, species: payload };
    case CARDS_STARSHIPS:
      return { ...cards, starships: payload };
    case CARDS_VEHICLES:
      return { ...cards, vehicles: payload };
    default:
      return cards;
  }
};

export default cards_list;

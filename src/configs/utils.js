export const uniqueKey = () => (Math.random() + 1).toString(36).substring(7);

export const search_types = [
  "films",
  "people",
  "planets",
  "species",
  "starships",
  "vehicles",
];

export const get_filter_data = (query, list) => {
  let initialState = {
    films: [],
    people: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
  };

  let types = Object.keys(list);
  types.map((el) => {
    let arr = [];
    list[el].map((elem) => {
      let keys_type = Object.keys(elem);
      keys_type.map((item) => {
        let text = `${elem[item]}`;
        let result = text.toLowerCase().match(query.toLowerCase());
        result?.length && arr.push(elem);
      });
    });

    initialState = { ...initialState, [el]: [...new Set(arr)] };
  });
  return initialState;
};

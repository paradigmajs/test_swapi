import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { get_filter_data, search_types, uniqueKey } from "../../configs/utils";
import EmptyContent from "../../helpers/EmptyContent";
import Films from "./Films";
import People from "./People";
import Planets from "./Planets";
import Species from "./Species";
import Starships from "./Starships";
import Vehicles from "./Vehicles";
import "./Card.css";


export default function Cards({ query }) {
  const cards = useSelector((state) => state.cards);
  const [list, setList] = useState({});
  useEffect(() => {
    setList(get_filter_data(query, cards));
  }, [query]);

  if (
    list[search_types[0]]?.length === 0 &&
    list[search_types[1]]?.length === 0 &&
    list[search_types[2]]?.length === 0 &&
    list[search_types[3]]?.length === 0 &&
    list[search_types[4]]?.length === 0 &&
    list[search_types[5]]?.length === 0
  )
    return <EmptyContent />;

  return (
    <>
      {list[search_types[0]]?.map((el) => (
        <Films el={el} key={uniqueKey()} />
      ))}
      {list[search_types[1]]?.map((el) => (
        <People el={el} key={uniqueKey()} />
      ))}
      {list[search_types[2]]?.map((el) => (
        <Planets el={el} key={uniqueKey()} />
      ))}
      {list[search_types[3]]?.map((el) => (
        <Species el={el} key={uniqueKey()} />
      ))}
      {list[search_types[4]]?.map((el) => (
        <Starships el={el} key={uniqueKey()} />
      ))}

      {list[search_types[5]]?.map((el) => (
        <Vehicles el={el} key={uniqueKey()} />
      ))}
    </>
  );
  //   else if (list == search_types[0])
  //     return list.map((el) => <Films el={el} key={uniqueKey()} />);
  //   else if (typeOfSearch == search_types[1])
  //     return list.map((el) => <People el={el} key={uniqueKey()} />);
  //   else if (typeOfSearch == search_types[2])
  //     return list.map((el) => <Planets el={el} key={uniqueKey()} />);
  //   else if (typeOfSearch == search_types[3])
  //     return list.map((el) => <Species el={el} key={uniqueKey()} />);
  //   else if (typeOfSearch == search_types[4])
  //     return list.map((el) => <Starships el={el} key={uniqueKey()} />);
  //   else if (typeOfSearch == search_types[5])
  //     return list.map((el) =><Vehicles el={el} key={uniqueKey()} />);
}

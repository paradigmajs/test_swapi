import React from "react";

export default function Starships({ el, k }) {
  const {
    MGLT,
    cargo_capacity,
    cost_in_credits,
    consumables,
    crew,
    hyperdrive_rating,
    length,
    manufacturer,
    max_atmosphering_speed,
    model,
    name,
    passengers,
    starship_class,
  } = el;
  return (
    <div key={k} className={"card"}>
      <b>rating{hyperdrive_rating}</b>
      <h3>Name : {name}</h3>
      <p>Model: {model}</p>
      <p className={"date"}>Class : {starship_class}</p>
    </div>
  );
}

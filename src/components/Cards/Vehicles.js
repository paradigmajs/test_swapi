import React from "react";

export default function Vehicles({ el, k }) {
  const {
    cargo_capacity,
    consumables,
    cost_in_credits,
    crew,
    length,
    manufacturer,
    max_atmosphering_speed,
    model,
    name,
    passengers,
    vehicle_class,
  } = el;
  return (
    <div key={k} className={"card"}>
      <b>crew {crew}</b>
      <h3>Name : {name}</h3>
      <p>Model: {model}</p>
      <p className={"date"}>class : {vehicle_class}</p>
    </div>
  );
}

import React from "react";

export default function Planets({ el, k }) {
  const {
    climate,
    diameter,
    gravity,
    name,
    orbital_period,
    population,
    rotation_period,
    surface_water,
    terrain,
  } = el;
  return (
    <div key={k} className={"card"}>
      <b> grav: {gravity}</b>
      <h3>Name : {name}</h3>
      <p>diameter: {diameter}</p>
      <p className={"date"}>population : {population}</p>
    </div>
  );
}

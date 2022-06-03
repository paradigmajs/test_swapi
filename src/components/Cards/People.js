import React from "react";

export default function People({ el, k }) {
  const {
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    name,
    skin_color,
  } = el;
  return (
    <div key={k} className={"card"}>
      <b> gender {gender}</b>
      <h3>Name : {name}</h3>
      <p>Skin: {skin_color}</p>
      <p className={"date"}>birth : {birth_year}</p>
    </div>
  );
}

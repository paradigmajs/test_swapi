import React from "react";

export default function Species({ el, k }) {
  const {
    average_height,
    average_lifespan,
    classification,
    designation,
    eye_colors,
    hair_colors,
    language,
    name,
    skin_colors,
  } = el;
  return (
    <div key={k} className={"card"}>
      <b>height {average_height}</b>
      <h3>Name : {name}</h3>
      <p>language: {language}</p>
      <p className={"date"}>Classification : {classification}</p>
    </div>
  );
}

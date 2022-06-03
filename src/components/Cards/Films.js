import React from "react";

export default function Films({ el, k }) {
  const {
    release_date,
    title,
    director,
    episode_id,
    opening_crawl,
    producer,
  } = el;
  return (
    <div key={k} className={"card"}>
      <b>ep: {episode_id}</b>
      <h3>Name : {title}</h3>
      <p>Producer: {producer}</p>
      <p className={"date"}>Release date : {release_date}</p>
    </div>
  );
}

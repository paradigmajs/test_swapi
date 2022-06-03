import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Input.css";

export default function Input({ query, result }) {
  const ref = useRef(null);
  const [value, setValue] = useState(query || "");
  const navigate = useNavigate();
  useEffect(() => {
    ref.current.focus();
  }, []);

  const search = (e) => {
    e.preventDefault();
    navigate(`/result/${value}`);
  };

  return (
    <div className={result ? "top_search-bar" : "search-bar"}>
      <Link to="/" className="logo">
        {" "}
        <h1>SWAPI</h1>
      </Link>
      <>
        <form onSubmit={search} className="form">
          <input
            ref={ref}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type={"text"}
            className={
              result
                ? "form__input top_form__input shadow"
                : "form__input shadow"
            }
          />
        </form>
      </>
    </div>
  );
}

import React from "react";
import { useParams } from "react-router-dom";
import Cards from "../../components/Cards";
import Input from "../../components/Input";

export default function Result() {
  let { query } = useParams();

  return (
    <div>
      <Input query={query} result={true} />
      <div className={"cards"}>
        <Cards query={query} />
      </div>
    </div>
  );
}

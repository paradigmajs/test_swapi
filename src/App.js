import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Get_all_data } from "./configs/ListSlice";
import Navigation from "./navigation";
import PreviewPage from "./navigation/Pages/PreviewPage";

export default function App() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  useEffect(() => {
    Get_all_data(dispatch);
    setTimeout(() => {
      setShow(false);
    }, 35000);
  }, []);
  return show ? <PreviewPage /> : <Navigation />;
}

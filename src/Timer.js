import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      console.log("add")
    setCount((count) => count + 1);
  }, 1000);

  return () => {
    console.log("remove")
    clearTimeout(timer)
  }
},[]);

  return <h1>I've rendered {count} times!</h1>;
}

export default Timer
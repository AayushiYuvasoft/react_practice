import { useState, useEffect } from 'react';

export default function Counterr() {
  let [count, setCount] = useState(0);

  // useEffect(() => {
  //   function onTick() {
  //     setCount(c => c + 1);
  //   }

  //  const intervalID= setInterval(onTick, 1000);
  //  return()=>{
  //   clearInterval(intervalID)
  //  }
  // }, []);

  function add() {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }

  console.log(count)

  return (
  <>
    <h1>{count}</h1>
    <button onClick={add}>Add</button>
  </>
  )
}
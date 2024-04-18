import { useCallback, useEffect, useState } from "react"
import Child from "./Child"

const Parent = () => {
  const [input, setInput] = useState("")
  let [counter, setCounter] = useState(0)

  const handleChilddata = useCallback((input) => {
    setInput(input)
  },[])

  const [data, setData] = useState(null);

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     console.log('Timer tick');
  //   }, 1000);
  
  //   console.log(timerId)
  //   return () => {
  //     clearInterval(timerId); // Clear the timer when the component unmounts or the effect runs again
  //     console.log('Timer cleared');
  //   };
  // }, []);

  const increment = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increment}>Add</button><br />
      <h1>{input}</h1>
      <Child  handleChilddata={handleChilddata}/>
    </>
  )
}

export default Parent
import React, { useCallback, useMemo, useState } from 'react';
import Todo from './Todo';

function Counter() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  },[todos]);


  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };


  // const expensiveCalutlation = (num) => {
  //   for (let i = 0; i < 1000000000; i++) {
  //     num = num + 1
  //   }
  //   return num
  // }
  // const calulate = useMemo(()=>expensiveCalutlation(count),[count])
  // console.log(calulate)
  console.log('counter')
  return (
    <div>
   <Todo todos={todos} addTodo={addTodo}/>
      <hr />
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;

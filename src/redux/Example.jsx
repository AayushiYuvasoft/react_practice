import React, { useState, useEffect, useLayoutEffect } from 'react';

const ExampleComponent = () => {
  const [width, setWidth] = useState(0);
  const [data, setdata] = useState([])
  async function fetchdata() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const resdata = await res.json()
      setdata(resdata)
    } catch (error) {
      // setData({ error: error.message });
    }
  }


  useEffect(() => {
    fetchdata()
  }, [])

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     console.log("userEffect")
  //      //throw new Error('Test error');
  //     setWidth(200);
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timerId);
  //   };
  // }, []); // Runs after initial render

  // useLayoutEffect(() => {
  //   console.log('useLayoutEffect: Before DOM update');
  //   setWidth(100);
  //   console.log('useLayoutEffect: After DOM update');
  // }, []); 



  return (
    <>  {data &&
      data?.map((ele) => {
        return (
          <li>{ele?.title}</li>
        )
      })
    }
    </>

  );
};

export default ExampleComponent;

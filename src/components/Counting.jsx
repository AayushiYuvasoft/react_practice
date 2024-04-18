import React, { useEffect, useState } from 'react'

const Counting = () => {
  const [data, setdata] = useState([])
  const [click, setClick] = useState(false)
  const [isThrottled, setThrotling] = useState(false)

  useEffect(() => {
    if (click && !isThrottled) {
      async function fetchdata() {
        try {
          const res = await fetch('https://jsonplaceholder.typicode.com/posts');
          if (!res.ok) {
            throw new Error('Failed to fetch data');
          }
          const resdata = await res.json()
          setdata(resdata)
          setClick(false)
          setThrotling(true)
          setTimeout(() => {
            setThrotling(false)
          }, 1500)
        } catch (error) {
          // setData({ error: error.message });
        }
      }
      fetchdata()
    }
  }, [click ,isThrottled])

  const hanleClick = () => {
    if(!isThrottled){
    setClick(true)
    }
  }
  return (
    <>
      <div>Counting</div>
      <button onClick={hanleClick}>CLike me</button>
    </>
  )
}

export default Counting
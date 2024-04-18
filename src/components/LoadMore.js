import axios from 'axios'
import React, { useEffect, useState } from 'react'

const LoadMore = () => {
  const [data, setData] = useState([])
  const [visbledata, setVisiblePosts] = useState([])
  const [startIndex, setStartIndex] = useState(0);
  const itemperpage = 20

  useEffect(() => {
    async function getPost() {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setData(response.data)
      setStartIndex(0);
      setVisiblePosts(response.data.slice(startIndex, startIndex + itemperpage))
    }
    getPost()
  }, [])

  const loadmore = () => {
    const newStateInex = startIndex + itemperpage;
    const visiblePost = data.slice(newStateInex, newStateInex + itemperpage)
    setVisiblePosts(prevVisiblePosts => [...prevVisiblePosts, ...visiblePost]);
    setStartIndex(newStateInex);
  }

  const loadLess=()=>{
    const visiblePost = data.slice(0 ,itemperpage)
    setVisiblePosts(visiblePost);
    setStartIndex(0);
  }

  return (
    <>
      <div>{
        visbledata?.map((item) => (
          <li>{item.title}</li>
        )
        )}

      </div>
      <div>
        {visbledata && visbledata.length < data.length ?
          (<button onClick={loadmore}>Load More</button>) : <button onClick={loadLess}>Load Less</button>}
      </div>
    </>
  )
}

export default LoadMore
import { useEffect, useState } from "react"

const useFetchList = () => {
  const [data, setdata] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchdata() {
      try {
        setLoading(true)
        const res = await fetch("https://jsonplaceholder.typicode.com/postss")
        const redda = await res.json()
        setdata(redda)
        setLoading(false)
      } catch (err) {
        console.log(err)
        setError(err)
        setLoading(false)
      }
    }
    fetchdata()
  }, [])
  return {data ,loading ,error}

}
export default useFetchList
import { memo, useState } from "react"

const Child = ({ handleChilddata }) => {
  const [values, setValues] = useState("")
  
  const handleChange = (e) => {
    setValues(e.target.value)
    handleChilddata(e.target.value)
  }

  console.log("child rendering")
  return (
    <>
      <input type="text" value={values} name="values" onChange={handleChange} />
    </>
  )
}

export default memo(Child)
import React, { useEffect, useRef, useState } from 'react'

const MyInput = () => {
  const [value, setValue] = useState({
    input1: "",
    input2: ""
  })
  const [shouldfocus, setShouldFocus] = useState(false)
  const inputref = useRef(null)
  const inputRef2 = useRef(null);

  const handleChnage = (e) => {
    const { name, value } = e.target
    setValue((previousSTate) => ({
      ...previousSTate, [name]: value
    }))

  }

  useEffect(() => {
    inputref.current.focus()
  }, [])

  return (
    <>
      <input type='text' ref={inputref} name="input1" value={value.input1} onChange={handleChnage} />
      <input type='text' ref={inputRef2} name="input2" value={value.input2} onChange={handleChnage} />
    </>
  )
}

export default MyInput
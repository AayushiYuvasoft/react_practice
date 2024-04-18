import React, { useState } from 'react'

const Theme = ({ children }) => {
  const [darktheme, setDarkTheme] = useState(false)

  const toggleTheme = () => {
    setDarkTheme(!darktheme)
  }
  return (
    <div className={darktheme ? 'dark-theme' : 'light-theme'}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {children}
    </div>
  )
}

export default Theme
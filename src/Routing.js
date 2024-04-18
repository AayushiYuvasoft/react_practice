import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ExampleComponent from './redux/Example'
import App from './App'

const Routing = () => {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<App/>}/>

  <Route path="/home" element={<ExampleComponent/>}/>
</Routes>
</BrowserRouter>  )
}

export default Routing
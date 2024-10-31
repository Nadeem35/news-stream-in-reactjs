import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import Newboard from './Component/Newboard'

function App() {
  const [category, setcategory] = useState("general")

  return (
    <div>
      {/* <Navbar setcategory={setcategory} /> */}
      {/* <Newboard category={category} /> */}
      <h1>d mns a dm</h1>
    </div>
  )
}
export default App
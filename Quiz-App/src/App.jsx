import React, { useState } from 'react'
import datas from './data'

const App = () => {

  const [currentQue, setCurrentQue] = useState(0);

  return (
    <div>
      <h1>Quiz App</h1>

      <h2>
        {datas[currentQue].question}
      </h2>
      <h1>Maintaining Streaks</h1>
    </div>
  )
}

export default App

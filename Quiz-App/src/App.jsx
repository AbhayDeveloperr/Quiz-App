import React, { useState } from 'react'
import questions from './data'

const App = () => {

  const [currentQue, setCurrentQue] = useState(0);

  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className='flex items-center justify-center flex-col pt-5'>
      <h1>Quiz App</h1>

      <h2 className='py-4'>
        {questions[currentQue].question}

        {questions[currentQue].options.map((option)=>(
            <button onClick={()=>{
              setSelectedOption(option)
            }} className='block'>{option}</button>
        ))}
        
      </h2>
    </div>
  )
}

export default App

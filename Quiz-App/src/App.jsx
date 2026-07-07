import React, { useState } from 'react'
import questions from './data'

const App = () => {

  const [currentQue, setCurrentQue] = useState(0);

  const [selectedOption, setSelectedOption] = useState("");
  console.log(selectedOption);

  const handleNext=()=>{
    setCurrentQue(currentQue+1)
  }
  

  return (
    <div className='flex items-center justify-center flex-col pt-5'>
      <h1 className='text-3xl font-bold'>Quiz App</h1>

      <h2 className='pt-8 font-semibold text-xl'>
        {questions[currentQue].question}
      </h2>
      <div>
        {questions[currentQue].options.map((option)=>(
            <button onClick={()=>{
              setSelectedOption(option)
            }} className='block'>{option}</button>
        ))}
      </div>
      <button onClick={handleNext} className='bg-green-700 px-3 py-1 my-2 cursor-pointer active:scale-95'>Next</button>
      console.log("Streak Maintaining")
      console.log("Streak Maintaining again")
    </div>
  )
}

export default App

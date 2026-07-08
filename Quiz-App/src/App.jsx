import React, { useState } from 'react'
import questions from './data'

const App = () => {

  const [currentQue, setCurrentQue] = useState(0);

  const [selectedOption, setSelectedOption] = useState("");
  console.log(selectedOption);

  const [score, setScore] = useState(0);

  const handleNext=()=>{
    // Score Banana
    if(selectedOption===questions[currentQue].answer){
      setScore(score+1)
    }
    setCurrentQue(currentQue+1)
    setSelectedOption("")
  };
  

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
            }} className='block cursor-pointer'>{option}</button>
        ))}
      </div>
      <button onClick={handleNext} className='bg-green-700 px-3 py-1 my-8 cursor-pointer active:scale-95'>Next</button>
    </div>
  )
}

export default App

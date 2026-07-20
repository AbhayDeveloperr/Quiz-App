import React, { useState } from 'react'
import questions from './data'

const App = () => {

  const [currentQue, setCurrentQue] = useState(0);

  const [selectedOption, setSelectedOption] = useState("");
  console.log(selectedOption);

  const [score, setScore] = useState(0);

  const [isFinished, setIsFinished] = useState(false);

  const [maxAttempt, setMaxAttempt] = useState(false);

  const handleNext=()=>{
    // Score Banana
    // console.log(questions.length)
    if(selectedOption===questions[currentQue].answer){
      setScore(score+1)
      
    }
    if(currentQue < questions.length-1){
      setCurrentQue(currentQue+1)
      setSelectedOption("")
      console.log(currentQue)
      
    }else{
      setIsFinished(true)
      setMaxAttempt(true)
    }
  };
  

  return (
    <div className='flex items-center justify-center flex-col pt-5'>
      <h1 className='text-3xl font-bold text-amber-300'>Quiz App</h1>

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
      <button onClick={handleNext} className={`bg-green-700 px-3 py-1 my-8 active:scale-95 ${maxAttempt? 'cursor-not-allowed' : 'cursor-pointer'}`}>{currentQue === questions.length - 1 ? "Submit" : "Next"}</button>

      <p className='text-3xl mt-5'>
        Your Score = {score}/{questions.length}
      </p>
    </div>
  )
}

export default App

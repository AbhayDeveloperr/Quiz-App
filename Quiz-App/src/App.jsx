import React, { useState } from 'react'
import questions from './data'

const App = () => {

  const [currentQue, setCurrentQue] = useState(0);

  const [selectedOption, setSelectedOption] = useState("");
  console.log(selectedOption);

  const [score, setScore] = useState(0);

  const [isFinished, setIsFinished] = useState(false);

  const [maxAttempt, setMaxAttempt] = useState(false);

  const [attemptCounter, setAttemptCounter] = useState(0);

  const handleNext=()=>{
    // Score Banana
    // console.log(questions.length)
    if(selectedOption===questions[currentQue].answer){
      setScore(score+1)
      
    }            


    if(currentQue < questions.length-1){
      setCurrentQue(currentQue+1)  //2
      setSelectedOption("")
      console.log(currentQue)
      
    }else{
      setIsFinished(true)
      setMaxAttempt(true)
    }
    setAttemptCounter(attemptCounter+1)
   
  };
  
//check why the currentqueue value is not approaching to 3.
  return (
    <div className='text-center pt-5'>
      <h1 className='text-3xl font-bold text-amber-300'>Quiz App</h1>
      <div id="game-over" className='mt-4'>
        {isFinished && (
          <p className="text-red-700 inline bg-red-300 px-4 py-2">
            Game is over!! Your score is {score}
          </p>
        )}
      </div>
    <div className={` ${maxAttempt? 'hidden' : 'block'}`}>
      <h2 className='pt-8 font-semibold text-xl text-center'>
        {questions[currentQue].question}
      </h2>
      <div className=' flex justify-center items-center'>
        <div>
            {questions[currentQue].options.map((option)=>(
              <button onClick={()=>{
                setSelectedOption(option)
              }} className='block cursor-pointer'>{option}</button>
            ))}
            <button onClick={handleNext} className={`bg-green-700 px-3 py-1 my-8 active:scale-95 ${maxAttempt? 'cursor-not-allowed' : 'cursor-pointer'}`}>{currentQue === questions.length - 1 ? "Submit" : "Next"}</button>
        </div>
      </div>
    </div>

    <p className='text-3xl mt-5'>
      
       Total Attempts = {attemptCounter}
    </p>
  </div>
  )
}

export default App

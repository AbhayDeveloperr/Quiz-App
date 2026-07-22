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

    if (selectedOption === "") {
      alert("Please select an option first!");
      return;
    }
    // Score Banana
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
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center pt-8 bg-red-900 shadow-lg shadow-gray-50 px-10 pb-8 rounded-xl h-[75vh]'>
        <h1 className='text-5xl font-bold text-white'>Quiz App</h1>
        <div id="game-over" className='mt-4'>
          {isFinished && (
            <p className="text-red-700 inline bg-red-300 px-4 py-2">
              Game is over!! Your score is {score}
            </p>
          )}
        </div>
      <div className={` ${maxAttempt? 'hidden' : 'block'}`}>
        <p className='text-white text-lg font-semibold pt-2'>
          Question {currentQue+1}/{questions.length}
        </p>
        <h2 className='pt-6 pb-4 font-semibold text-2xl text-center text-yellow-400'>
          {questions[currentQue].question}
        </h2>
        <div className=' flex justify-center items-center'>
          <div>
              {questions[currentQue].options.map((option)=>(
                <button onClick={()=>{
                  setSelectedOption(option)
                }} className= {`block w-64 py-3 my-2 rounded-lg transition-all duration-100 cursor-pointer hover:scale-105 active:scale-95 ${selectedOption==option? "bg-green-600 text-white" : "bg-gray-50 hover:bg-gray-100"}`}>{option}</button>
              ))}
              <button onClick={handleNext} className={`bg-black border-2 border-white text-white rounded-md px-12 py-2 my-8 hover:scale-105 active:scale-95 ${maxAttempt? 'cursor-not-allowed' : 'cursor-pointer'}`}>{currentQue === questions.length - 1 ? "Submit" : "Next"}</button>
          </div>
        </div>
      </div>

      <p className='text-xl mt-5 text-gray-50 font-bold'>
        
        Total Attempts = {attemptCounter}
      </p>
      </div>
    </div>
  )
}

export default App

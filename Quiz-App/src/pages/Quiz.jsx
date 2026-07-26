import React, { useEffect, useState } from 'react'
import questions from '../data'

const Quiz = () => {

  const [currentQue, setCurrentQue] = useState(0);

  const [selectedOption, setSelectedOption] = useState("");
  console.log(selectedOption);

  const [score, setScore] = useState(0);

  const [isFinished, setIsFinished] = useState(false);

  const [maxAttempt, setMaxAttempt] = useState(false);

  const [attemptCounter, setAttemptCounter] = useState(0);

  const [timeLeft, setTimeLeft] = useState(15);

  const [answerChecked, setAnswerChecked] = useState(false);

  const handleNext=(isAuto = false)=>{ 
    // Check if the user has selected an option
    if (!isAuto && selectedOption === "") {          //isAuto matlab jab user next btn clck krega
      alert("Please select an option first!");
      return;
    }
    // Score Banana
    if(selectedOption===questions[currentQue].answer){
      setScore(score+1)
      
    }            

    setAnswerChecked(true)
    setTimeout(()=>{
      if(currentQue < questions.length-1){
        setCurrentQue(currentQue+1)
        setSelectedOption("")
        setTimeLeft(15)
        console.log(currentQue)
        
      }else{
        setIsFinished(true)
        setMaxAttempt(true)
      }
      setAnswerChecked(false)
    },1000)
    setAttemptCounter(attemptCounter+1)
   
  };

  const handleRestart=()=>{
    setCurrentQue(0)
    setSelectedOption("")
    setScore(0)
    setAttemptCounter(0)
    setIsFinished(false)
    setMaxAttempt(false)
    setTimeLeft(15)
  };

  useEffect(()=>{
    if (isFinished) return;

    if(timeLeft===0){
      handleNext(true);
    }
    const interval = setInterval(()=>{
      setTimeLeft((prev) => prev - 1);
    },1000);
    return () => clearInterval(interval);
  },[timeLeft]);
  
//check why the currentqueue value is not approaching to 3.
  return (
    <div className='flex justify-center items-center p-5 md:h-screen bg-[#A4B885]'>
      <div className='text-center pt-8 bg-red-900 shadow-lg w-full md:w-sm  px-10 pb-8 rounded-xl h-[84vh] md:h-[90vh] min-h-[84vh] md:min-h-[90vh]'>
        <h1 className='text-2xl md:text-5xl font-bold text-white'>Quiz App</h1>
        <div id="game-over" className='mt-4'>
          {isFinished && (
            <div className='mt-5'>
              <p className="text-red-700 inline bg-red-300 px-4 py-2">
                Game is over!! Your score is {score}
              </p>
              <br />
              <button onClick={handleRestart} className="bg-green-600 text-white px-6 py-2 rounded mt-5 hover:bg-green-700 cursor-pointer">
                Play Again
              </button>
            </div>
          )}
        </div>
      <div className={` ${maxAttempt? 'hidden' : 'block'}`}>
        {/* Question Counter */}
        <p className='text-blue-300 text-lg font-semibold pt-2'>
          Question {currentQue+1}/{questions.length}
        </p>

        <p className="text-red-400 text-lg font-bold mt-2">
          Time Left : {timeLeft}s
        </p>
  
        <h2 className='pt-6 pb-4 font-semibold text-2xl text-center text-yellow-400 max-w-sm text-wrap'>
          {questions[currentQue].question}
        </h2>
        <div className=' flex justify-center items-center'>
          <div>
              {questions[currentQue].options.map((option)=>(
                <button onClick={()=>{
                  setSelectedOption(option)
                }} className= {`block w-64 py-3 my-2 rounded-lg transition-all duration-100 cursor-pointer hover:scale-105 active:scale-95 ${answerChecked? (
                  option===questions[currentQue].answer ? "bg-green-600 text-white" : option===selectedOption? "bg-red-600 text-white" : "bg-gray-50"
                ) : (selectedOption===option? "bg-blue-600 text-white" : "bg-gray-50 hover:bg-gray-100")}`}>{option}</button>
              ))}
              <button onClick={()=>{
                handleNext()
              }} className={`bg-black border-2 border-white text-white rounded-md px-12 py-2 mt-8 hover:scale-105 active:scale-95 ${maxAttempt? 'cursor-not-allowed' : 'cursor-pointer'}`}>{currentQue === questions.length - 1 ? "Submit" : "Next"}</button>
          </div>
        </div>
      </div>

      <p className='text-xl mt-3 md:mt-5 text-gray-50 font-bold'>
        
        Total Attempts = {attemptCounter}
      </p>
      </div>
    </div>
  )
}

export default Quiz
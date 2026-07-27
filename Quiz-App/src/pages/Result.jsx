import React from 'react'
import { useLocation } from 'react-router-dom';

const Result = () => {

  const location = useLocation();
  if (!location.state) {
    return <h1>No Result Found</h1>;
  }
  const { score,playerName,totalQuestions, attempts } = location.state;

  // const playerName = localStorage.getItem("playerName");
  return (
    <div className='flex items-center justify-center min-h-screen px-4'>
      <div className='w-full max-w-md bg-[#A4B885] p-4'>
        <p className='text-3xl '>Player Name: {playerName}</p>
        <p className='text-2xl py-4 text-green-900 font-semibold'>Your Score: {score}</p>
      </div>
    </div>
  )
}

export default Result

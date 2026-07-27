import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {

  const location = useLocation();
  if (!location.state) {
    return <h1>No Result Found</h1>;
  }
  const { score,playerName,totalQuestions, attempts } = location.state;

  const navigate = useNavigate();

  // const playerName = localStorage.getItem("playerName");
  return (
    <div className='flex items-center justify-center min-h-screen px-4 bg-[#333]'>
      <div className='w-full max-w-md bg-[#A4B885] p-4'>
        <p className='text-3xl '>Player Name: {playerName}</p>
        <p className='text-2xl py-6 text-green-900 font-semibold'>Your Score: {score}</p>
        <div className='flex gap-6'>
          <button className='bg-blue-700 px-4 py-2 text-white cursor-pointer hover:bg-blue-900 active:scale-95' onClick={()=>{
            navigate("/quiz")
          }}>Play Again</button>

          <button className='bg-amber-400 px-4 py-2 text-white cursor-pointer hover:bg-orange-900 active:scale-95' onClick={()=>{
            navigate("/")
          }}>Home</button>
        </div>
      </div>
    </div>
  )
}

export default Result

import React, { useState } from 'react'

const Home = () => {

    const [name, setName] = useState("");
    const [queLimit, setQueLimit] = useState(10);

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#A4B885] px-4">
      <div className="w-full max-w-md bg-red-900 rounded-xl shadow-xl p-6 md:p-8">
        <h1 className='text-3xl md:text-5xl text-white font-bold text-center mb-8'>Quiz App</h1>

        <input type="text" placeholder='Enter Your Name' value={name} onChange={(e)=>{
            setName(e.target.value);
        }}  className="w-full p-3 rounded mb-5 outline-none focus:ring-2 focus:ring-green-500"/>

        <select value={queLimit} onChange={(e)=>{
            setQueLimit(Number(e.target.value));
        }} className='w-full p-3 rounded mb-5'
        >
            <option value={5}>5 Questions</option>
            <option value={10}>10 Questions</option>
            <option value={15}>15 Questions</option>
            <option value={20}>20 Questions</option>
        </select>

        <p className="text-white my-4">
            Selected Questions: {queLimit}
        </p>

        <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition cursor-pointer">Start Quiz</button>
      </div>
    </div>
  )
}

export default Home

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [name, setName] = useState("");
    const [queLimit, setQueLimit] = useState(0);
    const [difficultyLevel, setDifficultyLevel] = useState("");

    const navigate = useNavigate();

    const handleStart = () => {

        if (name.trim() === "") {
            alert("Please enter your name");
            return;
        }

        if (queLimit <= 0) {
            alert("Please enter number of questions");
            return;
        }

        if (difficultyLevel === "") {
            alert("Please select difficulty level");
            return;
        }

        localStorage.setItem("playerName", name);
        localStorage.setItem("questionLimit", queLimit);
        localStorage.setItem("difficulty", difficultyLevel);

        navigate("/quiz");
    };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#A4B885] px-4">
      <div className="w-full max-w-md bg-slate-800 rounded-xl shadow-xl p-6 md:p-8 hover:scale-[1.02] transition-all duration-300">
        <h1 className='text-3xl md:text-5xl text-white font-bold text-center mb-12'>Quiz App</h1>

        <input type="text" placeholder='Enter Your Name' value={name} onChange={(e)=>{
            setName(e.target.value);
        }}  className="w-full p-3 rounded mb-5 border-gray-300 bg-slate-700 text-white "/>

        <input type="number" placeholder='Enter No of Questions' onChange={(e)=>{
            setQueLimit(Number(e.target.value))
        }} className='w-full rounded mb-2 text-white p-3 border-gray-300 border-2'/>

        <p className="text-yellow-50 my-4">
            Selected Questions: {queLimit}
        </p>

        <select value={difficultyLevel}  onChange={(e)=>{
            setDifficultyLevel(e.target.value);
        }} className='w-full p-3 my-2 rounded bg-blue-700 text-white'
        >
            <option value="" disabled>Choose Difficulty Level</option>
           <option value="Easy">Easy</option>
           <option value="Medium">Medium</option>
           <option value="Hard">Hard</option>
        </select>


        <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition cursor-pointer" onClick={()=>{
            handleStart()
        }}>Start Quiz</button>
      </div>
    </div>
  )
}

export default Home

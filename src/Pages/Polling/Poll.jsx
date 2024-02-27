import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

const Poll = () => {
  const navigate = useNavigate();

  const [currentPoll, setCurrentPoll] = useState({});

  const getPools = async () => {
    const response = await axios.get('http://localhost:4000/api/poll/getAllPolls')

    if (response.status === 200) {
      setCurrentPoll(response.data[0])
      console.log(response)
      console.log(response.data[0])
    }

  }

  useEffect(() => {
    getPools()
  }, [])


  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleQuiz = async () => {
    const response = await axios.post(`http://localhost:4000/api/poll/answerPolls/${currentPoll._id}`, {
      answer: selectedOption
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth')}`
      }
    })

    if (response.status === 200) {
      console.log(response.data)
      toast.success('Poll answered')
      navigate("/forum");
    }

  }


  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4 text-center">{currentPoll.question}</h2>

        {
          currentPoll.options && currentPoll.options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(index + 1)}
              className={`p-2 my-2 border rounded-md cursor-pointer ${selectedOption === index + 1 ? 'bg-green-100 border-green-500' : ''
                }`}
            >
              {option}
            </div>
          ))
        }

        <button
          onClick={handleQuiz}
          className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out w-full"
        >
          Vote
        </button>
      </div>
    </div>
  );
}

export default Poll;

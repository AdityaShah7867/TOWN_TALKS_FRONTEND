import React, { useState } from 'react';

const Poll = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4 text-center">What's is more important as a citizen to you?</h2>
        <div className="flex flex-col space-y-4">
          <label
            className={`cursor-pointer p-4 rounded-lg transition-colors border ${
              selectedOption === 'JavaScript' ? 'bg-blue-200' : 'hover:bg-gray-200'
            }`}
            onClick={() => handleOptionClick('JavaScript')}
          >
            <input type="radio" name="pollOption" value="JavaScript" className="hidden" />
            <span className="text-lg">Clean Water</span>
          </label>
          <label
            className={`cursor-pointer p-4 rounded-lg transition-colors border ${
              selectedOption === 'Python' ? 'bg-blue-200' : 'hover:bg-gray-200'
            }`}
            onClick={() => handleOptionClick('Python')}
          >
            <input type="radio" name="pollOption" value="Python" className="hidden" />
            <span className="text-lg">Proper Infrastructure (roads,etc)</span>
          </label>
          <label
            className={`cursor-pointer p-4 rounded-lg transition-colors border ${
              selectedOption === 'Java' ? 'bg-blue-200' : 'hover:bg-gray-200'
            }`}
            onClick={() => handleOptionClick('Java')}
          >
            <input type="radio" name="pollOption" value="Java" className="hidden" />
            <span className="text-lg">Gov. Schemes for unemployed</span>
          </label>
          <label
            className={`cursor-pointer p-4 rounded-lg transition-colors border ${
              selectedOption === 'C++' ? 'bg-blue-200' : 'hover:bg-gray-200'
            }`}
            onClick={() => handleOptionClick('C++')}
          >
            <input type="radio" name="pollOption" value="C++" className="hidden" />
            <span className="text-lg">Proper Healthcare System</span>
          </label>
        </div>
        <button
          className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out w-full"
        >
          Vote
        </button>
      </div>
    </div>
  );
}

export default Poll;

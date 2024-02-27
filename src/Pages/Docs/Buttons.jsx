import React from 'react'
import GreenButton from '../../Components/Buttons/GreenButton'
import BlueButton from '../../Components/Buttons/BlueButton'
const ButtonDoc = () => {
  return (
   
        <div className="container mx-auto my-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          DOCUMENT ON HOW TO USE PREMADE CARDS AND BUTTONS
        </h1>
      </div>
      <div className="my-8 bg-gray-200 mb-8">
        <p className='text-center text-lg'> Buttons </p>
        <div className="mt-8 p-8">
          <p className="text-lg font-semibold">Example Code Snippet:</p>
          <div className="relative">
            <textarea
              
              readOnly
              className="w-full p-2 border rounded bg-gray-100 h-24"
            >
              {`<BlueButton text="Blue Button" />
                <GreenButton text="Green Button" />`}
            </textarea>
            <button
              className="absolute top-0 right-0 mt-2 mr-2 bg-blue-500 text-white px-2 py-1 rounded cursor-pointer copy-button"
              
            >
              Copy
            </button>
          </div>
        </div>

        <div className="flex justify-center space-x-4 ">
          <BlueButton text="Blue Button" />
          <GreenButton text="Green Button" />
        </div>
        <br/>
      </div>

      
      
    </div>
   
  )
}

export default ButtonDoc
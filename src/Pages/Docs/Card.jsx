import React from 'react'
import StatusCard from "../../Components/Cards/StatusCard";
import LongCard from "../../Components/Cards/LongCard";

const CardDoc = () => {
  return (
    <div className="container mx-auto my-8 bg-gray-200 ">
        <div className="mt-8 p-8">
        <p className='text-center text-lg'> Cards </p>
          <p className="text-lg font-semibold">Example Code Snippet:</p>
          <div className="relative">
            <textarea
              
              readOnly
              className="w-full p-2 border rounded bg-gray-100 h-12"
            >
              {`<StatusCard text="Example Card" btnText="Some button" count="60"/>`}
            </textarea>
            <button
              className="absolute top-0 right-0 mt-2 mr-2 bg-blue-500 text-white px-2 py-1 rounded cursor-pointer copy-button"
              
            >
              Copy
            </button>
          </div>
        </div>

         <StatusCard text="Example Card" btnText="Some button" count="60"/>
         <br/>


         <div className="p-8">
       
          <p className="text-lg font-semibold">Example Code Snippet:</p>
          <div className="relative">
            <textarea
              
              readOnly
              className="w-full p-2 border rounded bg-gray-100 h-12"
            >
              {` <LongCard name="sample name" id="20" desc="Loreum Ipsim dorem met anfdf fhsdf s fshfs fsdihf sf" status="Completed" />`}
            </textarea>
            <button
              className="absolute top-0 right-0 mt-2 mr-2 bg-blue-500 text-white px-2 py-1 rounded cursor-pointer copy-button"
              
            >
              Copy
            </button>
          </div>
        </div>

         <LongCard name="sample name" id="20" desc="Loreum Ipsim dorem met anfdf fhsdf s fshfs fsdihf sf" status="Completed" />
         <br/>
    </div>
  )
}

export default CardDoc
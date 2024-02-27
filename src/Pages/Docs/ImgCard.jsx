import React from 'react'
import ImageCard from '../../Components/Cards/ImageCard'

const ImgCard = () => {
  return (
    <div className=''>
        <div className="my-8 bg-gray-200 mb-8">
        
        <div className="mt-8 p-8">
          <p className="text-lg font-semibold">Example Code Snippet:</p>
          <div className="relative">
            <textarea
              
              readOnly
              className="w-full p-2 border rounded bg-gray-100 h-24"
            >
              {`import ImageCard from '../../Components/Cards/ImageCard'

<ImageCard/>`}
            </textarea>
            <button
              className="absolute top-0 right-0 mt-2 mr-2 bg-blue-500 text-white px-2 py-1 rounded cursor-pointer copy-button"
              
            >
              Copy
            </button>
          </div>
        </div>

        <div className="flex justify-center space-x-4 ">
        <ImageCard/>
        </div>
        <br/>
      </div>
        
    </div>
  )
}

export default ImgCard
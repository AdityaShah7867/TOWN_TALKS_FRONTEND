import React from 'react';
import Post from '../../Components/Forum/Post';

const Forum = () => {
  return (
    <div className='bg-gray-100 min-h-screen '>
        <br/>
    <div className="flex justify-center items-center ">
      <div className="w-1/3">
        <Post />
      </div>
    </div>
    </div>
  );
};

export default Forum;

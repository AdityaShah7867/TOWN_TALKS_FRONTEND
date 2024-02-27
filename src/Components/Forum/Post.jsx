import React, { useState } from 'react';
import Card from './Card';
import { FaRegImage } from "react-icons/fa6";

const Post = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [imageAddmodel, setImageAddmodel] = useState(false);

    const toggleImageUpload = () => {
        setImageAddmodel(!imageAddmodel);
    };

    return (
        <div>
            <Card noPadding={false}>
                <form className="w-full ">
                    <div className="my-1">
                        <textarea
                            id="content"
                            name="content"
                            className="w-full p-4 border h-14 rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="What's on your mind?"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    {/* Image upload input */}
                    {imageAddmodel && (
                        <div className="mb-4">
                            <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                                Add a Photo / Video
                            </label>
                            <input
                                type="file"
                                id="media"
                                name="media"
                                accept="image/*, video/*" // Updated accept attribute
                                //   onChange={handleMediaUpload}
                                className="w-full border rounded-lg py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    )}

                    {/* Toggle image upload */}
                    <div className='flex justify-between'>
                        <div onClick={toggleImageUpload}>
                            <FaRegImage className='text-3xl' />
                        </div>

                        <div className="text-right">
                            <button
                                className="group w-24 h-8 ml-2 relative z-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br flex items-center font-medium text-white transition-all duration-200 ease-in-out rounded-lg px-4 py-2 active:scale-95 active:shadow-inner"
                                type='submit'
                            >
                                <div className="absolute -z-10 -inset-0.5  rounded-xl blur-xl group-hover:opacity-100 animate-pulse group-hover:inset-10"></div>
                                <div className="svg-wrapper transform group-hover:translate-x-5 group-hover:rotate-45 transition-all duration-400">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className=""
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path
                                            fill="#fff"
                                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                        ></path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default Post;

import React from 'react';
import Heart from '../assets/heart.svg';
import Comment from '../assets/comment.svg';

const DevCard = ({title }) => {
    return (
        <div className="container mx-auto p-3 rounded bg-white w-1/3 mt-3 border border-gray-300">
            <div className="flex items-center mb-2">
                <div>
                    <img className="rounded-full" style={{ width: "40px", height: "40px"}} src="https://avatars0.githubusercontent.com/u/16211217?s=460&u=7dec66a25393bfc3c553cc69c74b40b228d0778c&v=4" alt="profile pic"/>
                </div>
                <div className="ml-2">
                    <p className="tracking-wide text-gray-800 cursor-pointer hover:text-gray-900" style={{ fontSize: '14px'}}>Meena Chinmay</p>
                    <p className="font-light tracking-tight text-gray-600 cursor-pointer hover:text-gray-900" style={{ fontSize: '12px'}}>Aug15 (20 hours ago)</p>
                </div>
            </div>
            <div className="pl-12">
                <p className="hover:text-indigo-700 cursor-pointer font-bold" style={{ fontSize: '30px'}}>
                    {title}
                </p>
                <ul className="flex mt-3">
                    <a href="#" className="rounded p-1 bg-teal-500 text-white">#react</a>
                    <a href="#" className="rounded p-1 bg-green-500 text-white ml-3">#node</a>
                    <a href="#" className="rounded p-1 bg-orange-500 text-white ml-3">#express</a>
                    <a href="#" className="rounded p-1 bg-gray-900 text-white ml-3">#devto</a>
                </ul>
                <div className="flex items-center justify-between mt-3">
                    <div className="flex">
                        <p className="flex items-center text-gray-900 font-light text-sm px-2 py-1 hover:bg-gray-200 rounded cursor-pointer">
                            <img className="h-4 w-4 mr-2" src={Heart} />
                            333 reactions
                        </p>
                        <p className="flex items-center text-gray-900 font-light text-sm px-2 py-1 hover:bg-gray-200 rounded cursor-pointer">
                            <img className="h-4 w-4 mr-2" src={Comment} />
                            Add comment
                        </p>
                    </div>
                    <div className="flex items-center">
                        <span className="text-xs text-gray-600 mr-2">
                            1 min read
                        </span>
                        <button className="bg-gray-400 hover:bg-gray-500 text-gary-700 font-light rounded px-3 py-1 focus:outline-none">
                            <p>Save</p>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DevCard;
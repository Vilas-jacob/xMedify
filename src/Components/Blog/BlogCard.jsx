import React from 'react';
import Detox from '../../assets/detox.png';
import Avtar from '../../assets/avtar.png';

function BlogCard() {
  return (
    <>
    <div className="border border-gray-300 rounded-lg">
      <img src={Detox} alt="Blog Featured" className="w-full" />
      <div className="p-4">
        <p className="text-gray-400 font-medium mb-1 text-sm md:text-base text-left">
          Medical | March 31, 2022
        </p>
        <h3 className="text-blue-900 text-lg md:text-xl font-medium text-left leading-tight mb-2">
          6 Tips To Protect Your Mental Health When You're Sick
        </h3>
        <div className="flex items-center space-x-2">
          <img src={Avtar} alt="Author" className="h-8 w-8" />
          <p className="text-blue-900 text-sm md:text-base">Rebecca Lee</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default BlogCard
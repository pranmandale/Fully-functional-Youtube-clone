



import React, { useRef } from 'react';

function ListItems() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  const categories = [
    "All", "Music", "React routers", "computer programming", "movie musicals", "India national cricket team", "news",
    "mixes", "1990s", "Hindi cinema", "Live", "debugging", "cricket", "football", "java"
  ];

  return (
    <div className='relative px-4 flex items-center'>
      {/* Left Arrow Button */}
      <button
        onClick={scrollLeft}
        className="p-2 pr-4 text-white bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
      >
        ←
      </button>

      {/* Scrollable List Container */}
      <div
        ref={containerRef}
        className='flex space-x-4 flex-nowrap overflow-x-auto hide-scroll-bar ml-2'
      >
        {categories.map((category) => (
          <div
            key={category}
            className="flex-none px-4 py-2 font-medium text-gray-700 duration-300 bg-gray-200 cursor-pointer hover:bg-gray-300 rounded-xl"
          >
            {category}
          </div>
        ))}
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={scrollRight}
        className="p-2 pl-4 text-white bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none absolute right-0 top-1/2 transform -translate-y-1/2"
      >
        →
      </button>
    </div>
  );
}

export default ListItems;

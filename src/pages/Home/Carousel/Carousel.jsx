'use client';

import { Carousel } from 'flowbite-react';

const CustomCarousel = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel
        onSlideChange={(index) => console.log('onSlideChange()', index)}
      >
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="/src/assets/books/book1.jpg"
            alt="slide 1"
            className="w-full h-full"
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="/src/assets/books/book2.jpg"
            alt="slide 2"
            className="w-full h-full"
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="/src/assets/books/book3.jpg"
            alt="slide 3"
            className="w-full h-full"
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="/src/assets/books/book4.jpg"
            alt="slide 4"
            className="w-full h-full"
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="/src/assets/books/book5.jpg"
            alt="slide 5"
            className="w-full h-full"
          />
        </div>
      </Carousel>
    </div>
  );
};
export default CustomCarousel;

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BookCard from '../../../components/BookCard';

const Books = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-[92%] m-auto px-8 pb-8 bg-gray-200 rounded-xl mb-4">
        <div className="flex justify-between">
          <div></div>
          <h2 className="text-2xl py-4">Fiction</h2>
          <a href="#" className="text-xl pt-2 underline hover:text-blue-500">
            View all
          </a>
        </div>

        <Slider {...settings}>
          {books.map((book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </Slider>
      </div>
    </>
  );
};

const books = [
  {
    id: 1,
    title: `The Great Gatsby`,
    img: `/src/assets/books/42766.png`,
    author: `F. Scott Fitzgerald`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 2,
    title: `To Kill a Mockingbird`,
    img: `/src/assets/books/75154.png`,
    author: `Harper Lee`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 3,
    title: `1984`,
    img: `/src/assets/books/42766.png`,
    author: `George Orwell`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 4,
    title: `The Catcher in the Rye`,
    img: `/src/assets/books/75154.png`,
    author: `J.D. Salinger`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 5,
    title: `Pride and Prejudice`,
    img: `/src/assets/books/42766.png`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`, // Random price between $10 and $30
  },
];

export default Books;

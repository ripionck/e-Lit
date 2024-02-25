import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from '../../../components/SlideSettings';
import BookSlide from '../../../components/BookSlide';

const AwardWinners = () => {
  return (
    <>
      <div className="w-full m-auto px-8 pb-8 rounded-xl mb-4">
        <h2 className="text-3xl py-4">Award Winners</h2>

        <Slider {...settings}>
          {books.map((book) => (
            <BookSlide book={book} key={book.id} />
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

export default AwardWinners;

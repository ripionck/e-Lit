import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from '../../../components/SlideSettings';
import BookSlide from '../../../components/BookSlide';

const BestSellers = () => {
  return (
    <>
      <div className="w-full m-auto px-8 pb-8 mb-4">
        <h2 className="text-3xl py-4 border-b-2 border-gray-400">
          Best Sellers
        </h2>

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
    title: `Romantic Comedy`,
    img: `/src/assets/books/best_seller/9780399590962.jfif`,
    author: `F. Scott Fitzgerald`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 2,
    title: `Origin of Time`,
    img: `/src/assets/books/best_seller/9780593128466.jfif`,
    author: `Harper Lee`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 3,
    title: `Poverty By America`,
    img: `/src/assets/books/best_seller/9780593239933.jfif`,
    author: `George Orwell`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 4,
    title: `Five Survive`,
    img: `/src/assets/books/best_seller/9780593374191.jfif`,
    author: `J.D. Salinger`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 5,
    title: `Stacey Abrams`,
    img: `/src/assets/books/best_seller/9780593466988.jfif`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 6,
    title: `Fineapple Street`,
    img: `/src/assets/books/best_seller/9780593490716.jfif`,
    author: `F. Scott Fitzgerald`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 7,
    title: `The Celebrants`,
    img: `/src/assets/books/best_seller/9780593540435.jfif`,
    author: `Harper Lee`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 8,
    title: `Lee Child`,
    img: `/src/assets/books/best_seller/9780593641637.jfif`,
    author: `George Orwell`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 9,
    title: `Travel Teams`,
    img: `/src/assets/books/best_seller/9780593692844.jfif`,
    author: `J.D. Salinger`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 10,
    title: `A Book of Days`,
    img: `/src/assets/books/best_seller/9780593730386.jfif`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 11,
    title: `The Sun is Also A Star`,
    img: `/src/assets/books/best_seller/9780593815403.jfif`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 12,
    title: `Escape From Mr. Library`,
    img: `/src/assets/books/best_seller/9780593897201.jfif`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 13,
    title: `The Penderwicks`,
    img: `/src/assets/books/best_seller/9780593897232.jfif`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 14,
    title: `Flush`,
    img: `/src/assets/books/best_seller/9780593897249.jfif`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
];

export default BestSellers;

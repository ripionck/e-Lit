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
    img: `/best/9780399590962.jpg`,
    author: `F. Scott Fitzgerald`,
  },
  {
    id: 2,
    title: `Origin of Time`,
    img: `/best/9780593128466.jpg`,
    author: `Harper Lee`,
  },
  {
    id: 3,
    title: `Poverty By America`,
    img: `/best/9780593239933.jpg`,
    author: `George Orwell`,
  },
  {
    id: 4,
    title: `Five Survive`,
    img: `/best/9780593374191.jpg`,
    author: `J.D. Salinger`,
  },
  {
    id: 5,
    title: `Stacey Abrams`,
    img: `/best/9780593466988.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 6,
    title: `Fineapple Street`,
    img: `/best/9780593490716.jpg`,
    author: `F. Scott Fitzgerald`,
  },
  {
    id: 7,
    title: `The Celebrants`,
    img: `/best/9780593540435.jpg`,
    author: `Harper Lee`,
  },
  {
    id: 8,
    title: `Lee Child`,
    img: `/best/9780593641637.jpg`,
    author: `George Orwell`,
  },
  {
    id: 9,
    title: `Travel Teams`,
    img: `/best/9780593692844.jpg`,
    author: `J.D. Salinger`,
  },
  {
    id: 10,
    title: `A Book of Days`,
    img: `/best/9780593730386.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 11,
    title: `The Sun is Also A Star`,
    img: `/best/9780593815403.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 12,
    title: `Escape From Mr. Library`,
    img: `/best/9780593897201.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 13,
    title: `The Penderwicks`,
    img: `/best/9780593897232.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 14,
    title: `Flush`,
    img: `/best/9780593897249.jpg`,
    author: `Jane Austen`,
  },
];

export default BestSellers;

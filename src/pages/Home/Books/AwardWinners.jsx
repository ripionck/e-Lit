import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from '../../../components/SlideSettings';
import BookSlide from '../../../components/BookSlide';

const AwardWinners = () => {
  return (
    <>
      <div className="w-full m-auto px-8 rounded-xl mb-4">
        <h2 className="text-3xl py-4 border-b-2 border-gray-400">
          Award Winners
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
    title: `Five Days At Memorial`,
    img: `/src/assets/books/award_winner/9780307718976.jfif`,
    author: `F. Scott Fitzgerald`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 2,
    title: `A Man of the People`,
    img: `/src/assets/books/award_winner/9780385086165.jfif`,
    author: `Harper Lee`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 3,
    title: `Margaret AtWood`,
    img: `/src/assets/books/award_winner/9780525562627.jfif`,
    author: `George Orwell`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 4,
    title: `The Myth of Sisyphus`,
    img: `/src/assets/books/award_winner/9780525564454.jfif`,
    author: `J.D. Salinger`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 5,
    title: `Beloved`,
    img: `/src/assets/books/award_winner/9780525659273.jfif`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 6,
    title: `Evicted`,
    img: `/src/assets/books/award_winner/9780553447453.jfif`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 7,
    title: `Stay True`,
    img: `/src/assets/books/award_winner/9780593315200.jfif`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 8,
    title: `The Narrow Road`,
    img: `/src/assets/books/award_winner/9780804171472.jfif`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 9,
    title: `Lab Girl`,
    img: `/src/assets/books/award_winner/9781101873724.jfif`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 10,
    title: `The Vegetarian`,
    img: `/src/assets/books/award_winner/9781101906118.jfif`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 11,
    title: `A Thousand Acres`,
    img: `/src/assets/books/award_winner/9781101907962.jfif`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 12,
    title: `Homegong`,
    img: `/src/assets/books/award_winner/9781101971062.jfif`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 13,
    title: `A Brief History`,
    img: `/src/assets/books/award_winner/9781594633942.jfif`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 14,
    title: `Maggie O'Farrell`,
    img: `/src/assets/books/award_winner/9781984898876.jfif`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
];

export default AwardWinners;

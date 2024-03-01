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
    img: `/public/award/9780307718976.jpg`,
    author: `F. Scott Fitzgerald`,
  },
  {
    id: 2,
    title: `A Man of the People`,
    img: `/public/award/9780385086165.jpg`,
    author: `Harper Lee`,
  },
  {
    id: 3,
    title: `Margaret AtWood`,
    img: `/public/award/9780525562627.jpg`,
    author: `George Orwell`,
  },
  {
    id: 4,
    title: `The Myth of Sisyphus`,
    img: `/public/award/9780525564454.jpg`,
    author: `J.D. Salinger`,
  },
  {
    id: 5,
    title: `Beloved`,
    img: `/public/award/9780525659273.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 6,
    title: `Evicted`,
    img: `/public/award/9780553447453.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 7,
    title: `Stay True`,
    img: `/public/award/9780593315200.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 8,
    title: `The Narrow Road`,
    img: `/public/award/9780804171472.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 9,
    title: `Lab Girl`,
    img: `/public/award/9781101873724.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 10,
    title: `The Vegetarian`,
    img: `/public/award/9781101906118.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 11,
    title: `A Thousand Acres`,
    img: `/public/award/9781101907962.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 12,
    title: `Homegong`,
    img: `/public/award/9781101971062.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 13,
    title: `A Brief History`,
    img: `/public/award/9781594633942.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 14,
    title: `Maggie O'Farrell`,
    img: `/public/award/9781984898876.jpg`,
    author: `Jane Austen`,
  },
];

export default AwardWinners;

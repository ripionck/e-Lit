import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from '../../../components/SlideSettings';
import BookSlide from '../../../components/BookSlide';

const CommingSoon = () => {
  return (
    <>
      <div className="w-full m-auto px-8 pb-8 mb-4">
        <h2 className="text-3xl py-4 border-b-2 border-gray-400">
          Comming Soon
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
    title: `The Truth About The Devlins`,
    img: `/comming/9780525539704.jpg`,
    author: `F. Scott Fitzgerald`,
  },
  {
    id: 2,
    title: `After Annie`,
    img: `/comming/9780593229804.jpg`,
    author: `Harper Lee`,
  },
  {
    id: 3,
    title: `Poverty By America`,
    img: `/comming/9780593239933.jpg`,
    author: `George Orwell`,
  },
  {
    id: 4,
    title: `Table For Two`,
    img: `/comming/9780593296370.jpg`,
    author: `J.D. Salinger`,
  },
  {
    id: 5,
    title: `Wandering Stars`,
    img: `/comming/9780593318256.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 6,
    title: `C.J. Box`,
    img: `/comming/9780593331347.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 7,
    title: `The Golden Doves`,
    img: `/comming/9780593354902.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 8,
    title: `DEfiant Joy`,
    img: `/comming/9780593445426.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 9,
    title: `Never To Late`,
    img: `/comming/9780593498408.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 10,
    title: `Dead Weight`,
    img: `/comming/9780593536902.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 11,
    title: `True Story Of Tanner`,
    img: `/comming/9780593549094.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 12,
    title: `Wishing Game`,
    img: `/comming/9780593598856.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 13,
    title: `Alice`,
    img: `/comming/9780593641668.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 14,
    title: `John Sandford`,
    img: `/comming/9780593714812.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 15,
    title: `The Blue Book`,
    img: `/comming/9780593723678.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 16,
    title: `Outspoken`,
    img: `/comming/9781039007079.jpg`,
    author: `Jane Austen`,
  },
  {
    id: 17,
    title: `Burn It Down!`,
    img: `/comming/9781788735391.jpg`,
    author: `Jane Austen`,
  },
];

export default CommingSoon;

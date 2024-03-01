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
    img: `/public/comming/9780525539704.jpg`,
    author: `F. Scott Fitzgerald`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 2,
    title: `After Annie`,
    img: `/public/comming/9780593229804.jpg`,
    author: `Harper Lee`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 3,
    title: `Poverty By America`,
    img: `/public/comming/9780593239933.jpg`,
    author: `George Orwell`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 4,
    title: `Table For Two`,
    img: `/public/comming/9780593296370.jpg`,
    author: `J.D. Salinger`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 5,
    title: `Wandering Stars`,
    img: `/public/comming/9780593318256.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 6,
    title: `C.J. Box`,
    img: `/public/comming/9780593331347.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 7,
    title: `The Golden Doves`,
    img: `/public/comming/9780593354902.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 8,
    title: `DEfiant Joy`,
    img: `/public/comming/9780593445426.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 9,
    title: `Never To Late`,
    img: `/public/comming/9780593498408.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 10,
    title: `Dead Weight`,
    img: `/public/comming/9780593536902.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 11,
    title: `True Story Of Tanner`,
    img: `/public/comming/9780593549094.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 12,
    title: `Wishing Game`,
    img: `/public/comming/9780593598856.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 13,
    title: `Alice`,
    img: `/public/comming/9780593641668.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 14,
    title: `John Sandford`,
    img: `/public/comming/9780593714812.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 15,
    title: `The Blue Book`,
    img: `/public/comming/9780593723678.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 16,
    title: `Outspoken`,
    img: `/public/comming/9781039007079.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 17,
    title: `Burn It Down!`,
    img: `/public/comming/9781788735391.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
];

export default CommingSoon;

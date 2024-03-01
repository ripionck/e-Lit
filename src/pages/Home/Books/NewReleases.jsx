import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from '../../../components/SlideSettings';
import BookSlide from '../../../components/BookSlide';

const NewReleases = () => {
  return (
    <>
      <div className="w-full m-auto px-8 pb-8 rounded-xl mb-4">
        <h2 className="text-3xl py-4 border-b-2 border-gray-400">
          New Releases
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
    title: `We were the Lucky Ones`,
    img: `/public/new/9780399563096.jpg`,
    author: `F. Scott Fitzgerald`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 2,
    title: `It's To Be Angry About Capitalism`,
    img: `/public/new/9780593238738.jpg`,
    author: `Harper Lee`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 3,
    title: `Super Communicators`,
    img: `/public/new/9780593243916.jpg`,
    author: `George Orwell`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 4,
    title: `Come & Get It`,
    img: `/public/new/9780593328200.jpg`,
    author: `J.D. Salinger`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 5,
    title: `First Lie Wins`,
    img: `/public/new/9780593492918.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 6,
    title: `The Ball at Versailles`,
    img: `/public/new/9780593498347.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 7,
    title: `The Emotional lives of Teenagers`,
    img: `/public/new/9780593500033.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 8,
    title: `The Boys in the Boat`,
    img: `/public/new/9780593512302.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 9,
    title: `The Corsican Shadow`,
    img: `/public/new/9780593544174.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 10,
    title: `Roar`,
    img: `/public/new/9780593581926.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 11,
    title: `Funk 57`,
    img: `/public/new/9780593641996.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 12,
    title: `Rich AF`,
    img: `/public/new/9780593714911.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 13,
    title: `Single AF Cocktails`,
    img: `/public/new/9780593796870.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    id: 14,
    title: `Star Wars`,
    img: `/public/new/9780593872772.jpg`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
];

export default NewReleases;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailCard from '../../components/DetailCard';
import Details from './Details/Details';
import RatingAndReviews from './RatingAndReviews/RatingAndReviews';

const BookDetail = () => {
  const { id } = useParams(); // Extracting the ID parameter from the URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Find the book with the specified ID
    const selectedBook = books.find((book) => book.id === parseInt(id));
    setBook(selectedBook);
  }, [id]);

  return (
    <>
      {book ? <DetailCard book={book} /> : <p>Loading...</p>}
      <Details />
      <RatingAndReviews />
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

export default BookDetail;

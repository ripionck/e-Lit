import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailCard from '../../components/DetailCard';
import RatingAndReviews from './RatingAndReviews/RatingAndReviews';
import Loading from '../../components/Spinner';
import BookInformation from './BookInformation/BookInformation';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch(`https://e-library-z7s7.onrender.com/book/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  return (
    <>
      {book ? <DetailCard book={book} /> : <Loading />}
      <BookInformation />
      <RatingAndReviews />
    </>
  );
};

export default BookDetail;

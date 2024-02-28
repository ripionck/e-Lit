import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Spinner';
import Review from './Review/Review';
import BookInfo from './BookInfo/BookInfo';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const BookDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://e-library-z7s7.onrender.com/book/${id}`)
      // fetch(`https://e-library-z7s7.onrender.com/book/946676257622228994`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBook(data);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto px-4 py-8 mb-6">
          <div className="flex flex-col md:flex-row items-center md:gap-4">
            <div className="w-full md:w-72 md:h-96 max-w-md mb-4 md:mb-0">
              {book.cover && (
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              )}
            </div>

            <div className="w-full md:w-1/2 max-w-md px-4">
              <h1 className="text-2xl font-semibold mb-2">{book.title}</h1>
              <p className="text-lg mb-1 italic">
                {`${book?.author?.first_name} ${book?.author?.last_name}`}
              </p>
              <p className="text-lg mb-1">
                {book.edition}
                <span className="px-1">Edition</span>
              </p>
              <p className="mb-1">
                ISBN: <span className="px-1">{book?.isbn}</span>
              </p>
              <p className="text-gray-700 mb-2">Price: {book.price}</p>
              <button className="flex items-center gap-1 text-orange-500 text-xl hover:border-b hover:border-black">
                Add to Cart
                <HiOutlineArrowNarrowRight className="pt-1 text-3xl" />
              </button>
            </div>
          </div>
        </div>
      )}
      <BookInfo book={book} />
      <Review />
    </>
  );
};

export default BookDetail;

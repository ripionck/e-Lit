import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/Spinner';
import Review from './Review/Review';
import BookInfo from './BookInfo/BookInfo';
import { HiShoppingCart } from 'react-icons/hi';

const BookDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`https://e-library-z7s7.onrender.com/book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log('Book', data);
        setBook(data);
        setLoading(false);
      });
  }, [id]);

  const addToCart = async () => {
    const token = localStorage.getItem('access_token');
    const apiUrl = 'https://e-library-z7s7.onrender.com/cart/';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ book: book.id, quantity: quantity }),
      });

      if (response.ok) {
        console.log('Book added to cart successfully!');
        navigate('/profile');
      } else {
        // Handle error response
        const errorData = await response.json();
        console.error('Failed to add book to cart:', errorData);
      }
    } catch (error) {
      console.error('Error during adding book to cart:', error);
    }
  };

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
              <p className="text-gray-700 mb-2">Price: {book.price}$</p>
              <div className="flex flex-col gap-4">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="1"
                  className="px-2 py-1 border border-gray-300 rounded-lg w-20 text-center"
                />
                <button
                  onClick={addToCart}
                  className="w-1/2 md:w-1/3 pl-2 flex items-center gap-1 text-orange-500 text-xl border border-black hover:cursor-pointer hover:bg-white"
                >
                  Add to Cart
                  <HiShoppingCart className="pt-1 text-3xl" />
                </button>
              </div>
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

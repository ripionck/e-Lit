import { useNavigate, useParams } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { Pagination } from 'flowbite-react';
import Spinner from '../../../components/Spinner';

const AuthorBooks = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const onPageChange = (page) => setCurrentPage(page);
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://e-library-z7s7.onrender.com/book/?p=${currentPage}&author=${id}`
      );
      const data = await response.json();
      setBooks(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBookDetail = (id) => {
    navigate(`/book/${id}`);
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex flex-col w-3/4 mt-4 overflow-y-auto">
            <div className="grid grid-cols-5 gap-4">
              {books?.map((book) => (
                <div
                  key={book.id}
                  className="flex flex-col items-center relative"
                >
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="h-52 w-40 mb-2"
                  />
                  <p>{book.title}</p>
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handleBookDetail(book.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                      <span className="flex items-center gap-1">
                        Details
                        <HiArrowNarrowRight />
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center my-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
              showIcons
            />
          </div>
        </>
      )}
    </>
  );
};

export default AuthorBooks;

import { useNavigate } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';

const BookCard = ({ book }) => {
  const navigate = useNavigate();

  const handleBookDetail = (id) => {
    navigate(`/book/${id}`);
  };
  return (
    <>
      <div
        key={book.name}
        className="h-[320px] bg-gray-100 text-black rounded-xl relative"
      >
        <div className="h-56 flex justify-center items-center rounded-t-xl">
          <img src={book.img} alt="" className="h-44 w-44" />
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

        <div className="flex flex-col items-center justify-center px-4">
          <p className="text-xl font-semibold">{book.title}</p>
          <p className="text-center">{book.author}</p>
          <p className="text-center">{book.price}</p>
        </div>
      </div>
    </>
  );
};

export default BookCard;

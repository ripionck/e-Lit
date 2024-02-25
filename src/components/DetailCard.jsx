const DetailCard = ({ book }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center md:gap-4">
        <div className="w-full md:w-80 max-w-md mb-4 md:mb-0">
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2 max-w-md px-4">
          <h1 className="text-3xl font-semibold mb-4">{book.title}</h1>
          <p className="text-lg mb-4">{book.author}</p>
          <p className="text-gray-700 mb-4">Price: {book.price}$</p>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;

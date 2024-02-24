import { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { HiArrowNarrowRight } from 'react-icons/hi';
import PaginationX from '../../components/Pagination';

const BookList = () => {
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedPublisher, setSelectedPublisher] = useState(null);

  useEffect(() => {
    fetch('https://e-library-z7s7.onrender.com/category/')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch('https://e-library-z7s7.onrender.com/author/')
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);

  useEffect(() => {
    fetch('https://e-library-z7s7.onrender.com/publisher/all/')
      .then((res) => res.json())
      .then((data) => setPublishers(data));
  }, []);

  useEffect(() => {
    fetch('https://e-library-z7s7.onrender.com/book/')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
      });
  }, []);

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
      setSelectedAuthor(null);
      setSelectedPublisher(null);
    }
  };

  // Function to handle author selection
  const handleAuthorSelect = (author) => {
    if (selectedAuthor === author) {
      setSelectedAuthor(null);
    } else {
      setSelectedAuthor(author);
      setSelectedCategory(null);
      setSelectedPublisher(null);
    }
  };

  // Function to handle publisher selection
  const handlePublisherSelect = (publisher) => {
    if (selectedPublisher === publisher) {
      setSelectedPublisher(null);
    } else {
      setSelectedPublisher(publisher);
      setSelectedCategory(null);
      setSelectedAuthor(null);
    }
  };

  // Function to reset all filters
  const resetFilter = () => {
    setSelectedCategory(null);
    setSelectedAuthor(null);
    setSelectedPublisher(null);
  };

  // Filter items based on selected categories, authors, and publishers
  const filteredBooks = books.filter(
    (book) =>
      (selectedCategory === null || selectedCategory === book.category) &&
      (selectedAuthor === null || selectedAuthor === book.author) &&
      (selectedPublisher === null || selectedPublisher === book.publisher)
  );

  return (
    <>
      <div className="flex flex-row ml-4 mt-2">
        {/* ---------Left side--------------- */}
        <div className="flex flex-col w-1/4 p-4 overflow-y-auto">
          {/*-----------Categories---------------*/}
          <div className="border bg-gray-50 border-gray-300 px-4 py-2 rounded-lg">
            <h3 className="text-xl mb-2 border-b border-gray-300">
              Show By Categories
            </h3>
            <div className="flex flex-col space-y-1 max-h-52 overflow-y-auto ">
              {categories.map((category) => (
                <label
                  key={category.id}
                  className="block border rounded px-2 py-0.5 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === category}
                    onChange={() => handleCategorySelect(category)}
                    className="mr-2 cursor-pointer hover:bg-blue-500 h-3 w-3"
                    style={{ boxShadow: 'none' }}
                  />
                  {category.title}
                </label>
              ))}
            </div>
          </div>
          {/*-------author---------- */}
          <div className="border bg-gray-50 border-gray-300 px-4 py-2 mt-4 rounded-lg">
            <div className="flex justify-between border-b border-gray-300 mb-2">
              <h4 className="">Filter</h4>
              <p className="cursor-pointer text-blue-500" onClick={resetFilter}>
                Reset Filter
              </p>
            </div>
            <p>Authors</p>
            {/*-----------Search bar---------------*/}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-2 py-1 pr-8 mt-3 mb-2 border rounded-full bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <CiSearch />
              </span>
            </div>
            <div className="flex flex-col space-y-1 max-h-56 overflow-y-auto">
              {authors.map((author) => (
                <label
                  key={author.id}
                  className="block border rounded px-2 py-0.5 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="author"
                    checked={selectedAuthor === author}
                    onChange={() => handleAuthorSelect(author)}
                    className="mr-2 cursor-pointer hover:bg-blue-500 h-3 w-3"
                    style={{ boxShadow: 'none' }}
                  />
                  {author.first_name} {author.last_name}
                </label>
              ))}
            </div>
          </div>
          {/* -------------publishers-------------- */}
          <div className="border bg-gray-50 border-gray-300 px-4 py-2 mt-2 rounded-lg">
            <h4 className="">Publishers</h4>
            {/*-----------Search bar---------------*/}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-2 py-1 pr-8 mt-3 mb-2 border rounded-full bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <CiSearch />
              </span>
            </div>
            <div className="flex flex-col space-y-1 max-h-52 overflow-y-auto">
              {publishers.map((publisher) => (
                <label
                  key={publisher.id}
                  className="block border rounded px-2 py-0.5 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="publisher"
                    checked={selectedPublisher === publisher}
                    onChange={() => handlePublisherSelect(publisher)}
                    className="mr-2 cursor-pointer hover:bg-blue-500 h-3 w-3"
                    style={{ boxShadow: 'none' }}
                  />
                  {publisher.name}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------Right Side -------------*/}
        <div className="flex flex-col w-3/4 p-4 overflow-y-auto">
          <div className="grid grid-cols-4 gap-4">
            {filteredBooks.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center items-center bg-gray-200 rounded shadow relative"
              >
                <img src={item.cover} alt={item.title} className="h-52 w-48" />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button
                    // onClick={() => handleBookDetail(item.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    <span className="flex items-center gap-1">
                      Details
                      <HiArrowNarrowRight />
                    </span>
                  </button>
                </div>
                <p>{item.title}</p>
                <p>{item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PaginationX />
    </>
  );
};

export default BookList;

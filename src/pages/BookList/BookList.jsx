import { Pagination } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Spinner';

const BookList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedPublisher, setSelectedPublisher] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch('https://e-library-z7s7.onrender.com/category/')
      .then((res) => res.json())
      .then((data) => setCategories(data));

    fetch('https://e-library-z7s7.onrender.com/author/')
      .then((res) => res.json())
      .then((data) => setAuthors(data));

    fetch('https://e-library-z7s7.onrender.com/publisher/all/')
      .then((res) => res.json())
      .then((data) => setPublishers(data))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchData();
  }, [currentPage, selectedCategory, selectedAuthor, selectedPublisher]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://e-library-z7s7.onrender.com/book/?p=${currentPage}`
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

  // Function to handle category selection
  const handleCategorySelect = (categoryId) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
      setSelectedAuthor(null);
      setSelectedPublisher(null);
    }
  };

  // Function to handle author selection
  const handleAuthorSelect = (authorId) => {
    if (selectedAuthor === authorId) {
      setSelectedAuthor(null);
    } else {
      setSelectedAuthor(authorId);
      setSelectedCategory(null);
      setSelectedPublisher(null);
    }
  };

  // Function to handle publisher selection
  const handlePublisherSelect = (name) => {
    if (selectedPublisher === name) {
      setSelectedPublisher(null);
    } else {
      setSelectedPublisher(name);
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
      (selectedCategory === null || selectedCategory === book.category.id) &&
      (selectedAuthor === null || selectedAuthor === book.author.id) &&
      (selectedPublisher === null || selectedPublisher === book.publisher)
  );

  const handleBookDetail = (id) => {
    navigate(`/book/${id}`);
  };

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
                        checked={selectedCategory === category.id}
                        onChange={() => handleCategorySelect(category.id)}
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
                  <p
                    className="cursor-pointer text-blue-500"
                    onClick={resetFilter}
                  >
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
                        checked={selectedAuthor === author.id}
                        onChange={() => handleAuthorSelect(author.id)}
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
                        checked={selectedPublisher === publisher.name}
                        onChange={() => handlePublisherSelect(publisher.name)}
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
            <div className="flex flex-col w-3/4 mt-4 overflow-y-auto">
              <div className="grid grid-cols-5 gap-4">
                {filteredBooks.map((book) => (
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

export default BookList;

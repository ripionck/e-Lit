import { useState } from 'react';

const BookInfo = ({ book }) => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="mb-2 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-md font-medium text-center"
          id="default-styled-tab"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === 'description'
                  ? 'border-purple-600 text-purple-600 '
                  : 'hover:text-gray-600 hover:border-gray-300 '
              }`}
              id="description-styled-tab"
              onClick={() => handleTabClick('description')}
              type="button"
              role="tab"
              aria-controls="description"
              aria-selected={activeTab === 'description'}
            >
              Description
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === 'author'
                  ? 'border-purple-600 text-purple-600 '
                  : 'hover:text-gray-600 hover:border-gray-300'
              }`}
              id="author-styled-tab"
              onClick={() => handleTabClick('author')}
              type="button"
              role="tab"
              aria-controls="author"
              aria-selected={activeTab === 'author'}
            >
              Author
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === 'more'
                  ? 'border-purple-600 text-purple-600 '
                  : 'hover:text-gray-600 hover:border-gray-300 '
              }`}
              id="more-styled-tab"
              onClick={() => handleTabClick('more')}
              type="button"
              role="tab"
              aria-controls="more"
              aria-selected={activeTab === 'more'}
            >
              More Info
            </button>
          </li>
        </ul>
      </div>
      <div id="default-styled-tab-content">
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === 'description' ? '' : 'hidden'
          }`}
          id="styled-description"
          role="tabpanel"
          aria-labelledby="description-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {book?.description}
          </p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === 'author' ? '' : 'hidden'
          }`}
          id="styled-author"
          role="tabpanel"
          aria-labelledby="author-tab"
        >
          <div className="flex flex-col md:flex-row items-center md:gap-4">
            <div className="w-32 h-32 max-w-md mb-4 md:mb-0">
              {book?.author?.avater && (
                <img
                  src={book?.author?.avater}
                  alt={`${book?.author?.first_name} ${book?.author?.last_name}`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              )}
            </div>

            <div className="w-full p-4">
              <p className="text-xl font-semibold py-2">{`${book?.author?.first_name} ${book?.author?.last_name}`}</p>
              <p className="">{book?.author?.description}</p>
            </div>
          </div>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === 'more' ? '' : 'hidden'
          }`}
          id="styled-more"
          role="tabpanel"
          aria-labelledby="more-tab"
        >
          <p className="mb-1">Publisher: {book?.publisher}</p>
          <p className="mb-1">Language: {book?.language}</p>
          <p className="mb-1">Category: {book?.category?.title}</p>
          <p className="mb-1">Pages: {book?.pages}</p>
          <p className="mb-1">Publication Date: {book?.publication_date}</p>
        </div>
      </div>
    </>
  );
};

export default BookInfo;

import { useState } from 'react';
import { HiOutlinePlusSm } from 'react-icons/hi';

const RatingAndReviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <>
      <h5>Ratings and Reviews</h5>
      {/* Rating Section */}
      <div className="flex justify-between items-center mt-4 border-t-2">
        <h3>Reviews</h3>
        {/* Write Review Button */}
        <button
          onClick={toggleModal}
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Write Review
        </button>
      </div>

      {/* Main Modal */}
      <div
        className={`fixed inset-0 z-50 overflow-y-auto ${
          isModalOpen ? 'block' : 'hidden'
        }`}
        id="crud-modal"
        tabIndex="-1"
        aria-hidden={!isModalOpen}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 transition-opacity"
            aria-hidden="true"
            onClick={toggleModal}
          >
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          ></span>
          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <button
                  onClick={toggleModal}
                  type="button"
                  className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  <div className="mt-2">
                    {/* Modal Content */}
                    <form className="p-2">
                      {/* Rating Input */}
                      <div className="mb-4">
                        <label
                          htmlFor="rating"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Rating
                        </label>
                        <input
                          type="number"
                          id="rating"
                          min="0"
                          max="5"
                          value={rating}
                          onChange={(e) => handleRatingChange(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Enter rating (0-5)"
                          required
                        />
                      </div>
                      {/* Review Input */}
                      <div className="mb-4">
                        <label
                          htmlFor="description"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Write Review
                        </label>
                        <textarea
                          id="description"
                          rows="4"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Write review here"
                          required
                        ></textarea>
                      </div>
                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        <HiOutlinePlusSm /> Add Review
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingAndReviews;

import { useState } from 'react';
import { HiOutlinePlusSm, HiOutlineX } from 'react-icons/hi';
import { useParams } from 'react-router-dom';

const RatingAndReviews = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
  });
  console.log(formData);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleRatingChange = (value) => {
    setFormData({ ...formData, rating: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('access_token');
    const apiUrl = `https://e-library-z7s7.onrender.com/book/${id}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Review added successfully!');
        setFormData({ rating: 0, comment: '' });
        toggleModal();
      } else {
        // Handle error response
        const errorData = await response.json();
        console.error('Failed adding review:', errorData);
      }
    } catch (error) {
      console.error('Error during adding review:', error);
    }
  };

  return (
    <>
      <h5>Ratings and Reviews</h5>
      <div className="flex justify-between items-center mt-4 border-t-2">
        <h3>Reviews</h3>
        {/* ---------Write Review Button---------------- */}
        <button
          onClick={toggleModal}
          className="block text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="button"
        >
          Write Review
        </button>
      </div>

      {/* -----------Main Modal--------------- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
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
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <button
                    onClick={toggleModal}
                    type="button"
                    className="absolute top-0 right-0 mt-4 mr-4 text-2xl text-gray-500 hover:text-gray-700 "
                  >
                    <HiOutlineX />
                  </button>
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <div className="mt-2">
                      <form onSubmit={handleSubmit} className="p-2">
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
                            value={formData.rating}
                            onChange={(e) => handleRatingChange(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Enter rating (0-5)"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="comment"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Write Comment
                          </label>
                          <textarea
                            id="comment"
                            rows="4"
                            value={formData.comment}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                comment: e.target.value,
                              })
                            }
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                            placeholder="Write review here"
                            required
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          className="text-white inline-flex items-center bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
      )}
    </>
  );
};

export default RatingAndReviews;

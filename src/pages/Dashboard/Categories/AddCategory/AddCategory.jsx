import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const token = localStorage.getItem('access_token');

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://e-library-z7s7.onrender.com/deposit/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ category }),
        }
      );

      if (response.ok) {
        console.log('Category added successful');
        navigate('/dashboard/categories');
      } else {
        throw new Error('Error adding category');
      }
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <div className="mx-auto max-w-md mt-8">
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="p-4 sm:p-7">
          <p className="mt-2 mb-5 text-base text-gray-600">
            Use the form below to Add Category
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex max-w-md flex-col gap-1"
          >
            <label>
              Category:
              <input
                className="w-full py-2 rounded px-4  bg-gray-100"
                type="text"
                value={category}
                onChange={handleChange}
                required
              />
            </label>
            <button
              className="uppercase text-sm font-bold border-0 rounded px-4 py-2 bg-sky-500 hover:bg-sky-900"
              type="submit"
            >
              Add Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddAuthor = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    first_name: '',
    last_name: '',
    description: '',
    avater: null,
  });

  const token = localStorage.getItem('access_token');

  const handleChange = (e) => {
    if (e.target.name === 'avater') {
      setformData({ ...formData, image: e.target.files[0] });
    } else {
      setformData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('first_name', formData.first_name);
      formData.append('last_name', formData.last_name);
      formData.append('avater', formData.avater);
      formData.append('description', formData.description);

      const response = await fetch(
        ' https://e-library-z7s7.onrender.com/author/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setformData({
          first_name: '',
          last_name: '',
          description: '',
          avater: null,
        });
        console.log(response);
        navigate('/');
      } else {
        throw new Error('Error adding author');
      }
    } catch (error) {
      console.error('Error adding author:', error);
    }
  };

  return (
    <div className="mx-auto max-w-md mt-8">
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="p-4 sm:p-7">
          <p className="mt-2 mb-5 text-base text-gray-600">
            Use the form to add author
          </p>
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="flex max-w-md flex-col gap-1"
          >
            <label>
              First Name:
              <input
                className="w-full py-2 rounded px-4  bg-gray-100"
                type="text"
                name="first_name"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Last Name:
              <input
                className="w-full py-2 rounded px-4  bg-gray-100"
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Description:
              <textarea
                className="w-full py-2 rounded px-4  bg-gray-100"
                rows="5"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Avater:
              <input
                className="w-full py-2 mb-2 rounded px-4  bg-gray-100"
                type="file"
                name="avater"
                onChange={handleChange}
                required
              />
            </label>
            <button
              className="uppercase text-sm font-bold border-0 rounded px-4 py-2 bg-sky-500 hover:bg-sky-900"
              type="submit"
            >
              Add Author
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAuthor;

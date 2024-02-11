import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditAuthor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    description: '',
    avater: null,
  });

  const token = localStorage.getItem('access_token');

  useEffect(() => {
    fetch(`https://e-library-z7s7.onrender.com/author/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setFormData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // if (e.target.name === 'avater') {
    //   setFormData({ ...formData, avatar: e.target.files[0] });
    // } else {
    //   setFormData({ ...formData, [e.target.name]: e.target.value });
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('first_name', formData.first_name);
      formDataToSend.append('last_name', formData.last_name);
      formDataToSend.append('description', formData.description);

      const response = await fetch(
        `https://e-library-z7s7.onrender.com/author/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formDataToSend),
        }
      );

      if (response.ok) {
        setFormData({
          first_name: '',
          last_name: '',
          description: '',
          avatar: null,
        });
        navigate('/dashboard/authors');
      } else {
        throw new Error('Error updating author');
      }
    } catch (error) {
      console.error('Error updating author:', error);
    }
  };

  return (
    <div className="mx-auto max-w-md mt-8">
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="p-4 sm:p-7">
          <p className="mt-2 mb-5 text-base text-gray-600">
            Use the form to edit author
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
                value={formData.first_name}
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
              />
            </label>
            <button
              className="uppercase text-sm font-bold border-0 rounded px-4 py-2 bg-sky-500 hover:bg-sky-900"
              type="submit"
            >
              Update Author
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAuthor;

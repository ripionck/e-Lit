import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditAuthor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [authorData, setAuthorData] = useState({
    first_name: '',
    last_name: '',
    description: '',
  });

  const [avater, setAvater] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'avater') {
      setAvater(e.target.files[0]);
    } else {
      setAuthorData({ ...authorData, [e.target.name]: e.target.value });
    }
  };

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
        setAuthorData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('first_name', authorData.first_name);
      formData.append('last_name', authorData.last_name);
      formData.append('description', authorData.description);
      formData.append('avater', avater);

      const response = await fetch(
        `https://e-library-z7s7.onrender.com/author/${id}/`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        console.log('Author updated successfully!');
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
            <div className="flex flex-col">
              <label
                htmlFor="profile-image-upload"
                className="flex justify-center"
              >
                <img
                  src={avater ? URL.createObjectURL(avater) : authorData.cover}
                  alt={`${authorData.first_name} ${authorData.last_name}`}
                  className="w-40 h-48 bg-gray-200 object-cover mb-2 cursor-pointer"
                />
                <input
                  type="file"
                  id="profile-image-upload"
                  className="sr-only"
                  accept="image/*"
                  name="cover"
                  onChange={handleChange}
                />
              </label>
              <button
                type="button"
                onClick={() =>
                  document.getElementById('profile-image-upload').click()
                }
                className="w-1/2 mx-auto bg-gray-700 hover:bg-opacity-70 text-white px-2 mb-4 rounded"
              >
                Upload Image
              </button>
            </div>
            <label>
              First Name:
              <input
                className="w-full py-2 rounded px-4  bg-gray-100"
                type="text"
                name="first_name"
                value={authorData.first_name}
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
                value={authorData.last_name}
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
                value={authorData.description}
                onChange={handleChange}
                required
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

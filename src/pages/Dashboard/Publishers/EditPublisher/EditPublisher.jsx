import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPublisher = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [publisherData, setPublisherData] = useState({
    name: '',
    address: '',
  });
  const [logo, setLogo] = useState('');

  const token = localStorage.getItem('access_token');

  useEffect(() => {
    fetch(`https://e-library-z7s7.onrender.com/publisher/update/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPublisherData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    if (e.target.name === 'logo') {
      setLogo(e.target.files[0]);
    } else {
      setPublisherData({ ...publisherData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', publisherData.name);
      formData.append('address', publisherData.address);
      formData.append('logo', logo);

      const response = await fetch(
        `https://e-library-z7s7.onrender.com/publisher/update/${id}/`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        navigate('/dashboard/publishers');
      } else {
        throw new Error('Error editing publisher.');
      }
    } catch (error) {
      console.error('Error editing publisher:', error);
    }
  };

  return (
    <div className="mx-auto max-w-md mt-8">
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="p-4 sm:p-7">
          <p className="mt-2 mb-5 text-base text-gray-600">
            Use the form to edit the publisher
          </p>
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="flex max-w-md flex-col gap-1"
          >
            <div className="flex flex-col">
              <label htmlFor="logo-upload" className="flex justify-center">
                <img
                  src={logo ? URL.createObjectURL(logo) : publisherData.logo}
                  alt={publisherData.name}
                  className="w-40 h-48 bg-gray-200 object-cover mb-2 cursor-pointer"
                />
                <input
                  type="file"
                  id="logo-upload"
                  className="sr-only"
                  accept="image/*"
                  name="logo"
                  onChange={handleChange}
                />
              </label>
              <button
                type="button"
                onClick={() => document.getElementById('logo-upload').click()}
                className="w-1/2 mx-auto bg-gray-700 hover:bg-opacity-70 text-white px-2 mb-4 rounded"
              >
                Upload Image
              </button>
            </div>
            <label>
              Name:
              <input
                className="w-full py-2 rounded px-4 bg-gray-100"
                type="text"
                name="name"
                value={publisherData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Address:
              <textarea
                className="w-full py-2 rounded px-4 bg-gray-100"
                rows="3"
                type="text"
                name="address"
                value={publisherData.address}
                onChange={handleChange}
              />
            </label>
            <button
              className="uppercase text-sm font-bold border-0 rounded px-4 py-2 bg-sky-500 hover:bg-sky-900"
              type="submit"
            >
              Update Publisher
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPublisher;

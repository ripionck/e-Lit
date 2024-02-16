import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPublisher = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    name: '',
    address: '',
    logo: null,
  });
  console.log(formData);
  const token = localStorage.getItem('access_token');

  const handleChange = (e) => {
    if (e.target.name === 'logo') {
      setformData({ ...formData, logo: e.target.files[0] });
    } else {
      setformData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('logo', formData.logo);
      formDataToSend.append('address', formData.address);

      const response = await fetch('http://127.0.0.1:8000/publisher/create/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      if (response.ok) {
        setformData({
          name: '',
          address: '',
          logo: null,
        });
        // console.log(response);
        navigate('/dashboard/publishers');
      } else {
        throw new Error('Error adding publisher.');
      }
    } catch (error) {
      console.error('Error adding publisher:', error);
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
              Name:
              <input
                className="w-full py-2 rounded px-4  bg-gray-100"
                type="text"
                name="name"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Address:
              <textarea
                className="w-full py-2 rounded px-4  bg-gray-100"
                rows="3"
                type="text"
                name="address"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Logo:
              <input
                className="w-full py-2 mb-2 rounded px-4  bg-gray-100"
                type="file"
                name="logo"
                onChange={handleChange}
                required
              />
            </label>
            <button
              className="uppercase text-sm font-bold border-0 rounded px-4 py-2 bg-sky-500 hover:bg-sky-900"
              type="submit"
            >
              Add Publisher
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPublisher;

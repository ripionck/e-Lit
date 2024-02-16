import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPublisher = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    logo: null,
  });
  console.log(formData);
  const token = localStorage.getItem('access_token');

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/publisher/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setFormData({
          name: data.name,
          address: data.address,
          logo: data.logo,
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    if (e.target.name === 'logo') {
      setFormData({ ...formData, logo: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('logo', formData.logo);
      formDataToSend.append('address', formData.address);

      const response = await fetch(`http://127.0.0.1:8000/publisher/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

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
            <label>
              Name:
              <input
                className="w-full py-2 rounded px-4 bg-gray-100"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Address:
              <textarea
                className="w-full py-2 rounded px-4 bg-gray-100"
                rows="3"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Logo:
              <input
                className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                type="file"
                name="logo"
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

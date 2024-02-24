import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditBook = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    language: '',
    isbn: '',
    pages: '',
    edition: '',
    cover: '',
    quantity: '',
    author: '',
    category: '',
    price: 0,
  });

  console.log(formData.isbn);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'cover') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    fetch(`https://e-library-z7s7.onrender.com/book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormData(data);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.title ||
      !formData.language ||
      !formData.isbn ||
      !formData.pages ||
      !formData.edition ||
      !formData.cover ||
      !formData.quantity ||
      !formData.author ||
      !formData.category
    ) {
      console.error('Please fill out all fields');
      return;
    }

    const token = localStorage.getItem('access_token');
    const apiUrl = `https://e-library-z7s7.onrender.com/book/${id}`;

    try {
      const formData = new FormData();
      formData.append('title', formData.title);
      formData.append('language', formData.language);
      formData.append('isbn', formData.isbn);
      formData.append('pages', formData.pages);
      formData.append('edition', formData.edition);
      formData.append('cover', formData.cover);
      formData.append('quantity', formData.quantity);
      formData.append('author', formData.author);
      formData.append('category', formData.category);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Book added successfully!');
        // Redirect or perform any other action upon successful registration
      } else {
        // Handle error response
        const errorData = await response.json();
        console.error('Failed adding book:', errorData);
      }
    } catch (error) {
      console.error('Error during adding book:', error);
    }
  };

  return (
    <div className="mx-auto max-w-lg mt-8">
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="p-4 sm:p-7">
          <p className="mt-2 mb-5 text-base leading-tight text-gray-600">
            Use the form to add book
          </p>
          <form
            className="flex max-w-md flex-col gap-4"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-2">
              <div className="w-full ">
                <label>
                  Title:
                  <input
                    className="w-full py-2 mb-2 rounded px-4  bg-gray-100"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="w-full">
                <label>
                  Author:
                  <input
                    className="w-full py-2 mb-2 rounded px-4  bg-gray-100"
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <label>
                  Category:
                  <input
                    className="w-full py-2 mb-2 rounded px-4  bg-gray-100"
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="w-full">
                <label>
                  Edition:
                  <input
                    className="w-full py-2 mb-2 rounded px-4  bg-gray-100"
                    type="text"
                    name="edition"
                    value={formData.edition}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <label>
                  Language:
                  <input
                    className="w-full py-2 mb-2 rounded px-4  bg-gray-100"
                    type="text"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="w-full">
                <label>
                  ISBN:
                  <input
                    className="w-full py-2 mb-2 rounded px-4  bg-gray-100"
                    type="number"
                    name="isbn"
                    value={formData.isbn}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <label>
                  Page Number:
                  <input
                    className="w-full py-2 mb-2 rounded px-4  bg-gray-100"
                    type="number"
                    name="pages"
                    value={formData.pages}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="w-full">
                <label>
                  Quantity:
                  <input
                    className="w-full py-2 mb-2 rounded px-4  bg-gray-100"
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <button
              className="uppercase text-sm font-bold border-0 rounded px-4 py-2 bg-sky-500 hover:bg-sky-900"
              type="submit"
            >
              Update Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditBook;

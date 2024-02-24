import { useEffect, useState } from 'react';

const AddBook = () => {
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    language: '',
    isbn: '',
    pages: 0,
    price: 0,
    edition: '',
    cover: null,
    publication_date: '',
    quantity: 0,
    author: '',
    category: '',
    publisher: '',
  });
  console.log(formData);
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'cover') {
      setFormData({ ...formData, cover: files[0] });
    } else if (
      name === 'author' ||
      name === 'category' ||
      name === 'publisher'
    ) {
      const selectedOption = e.target.options[e.target.selectedIndex];
      const id = selectedOption.value;
      setFormData({ ...formData, [name]: id });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    fetch('https://e-library-z7s7.onrender.com/category/')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch('https://e-library-z7s7.onrender.com/author/')
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);

  useEffect(() => {
    fetch('https://e-library-z7s7.onrender.com/publisher/all/')
      .then((res) => res.json())
      .then((data) => setPublishers(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    const token = localStorage.getItem('access_token');
    const apiUrl = 'https://e-library-z7s7.onrender.com/book/';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: form,
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
                    className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                    type="text"
                    name="title"
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="w-full">
                <label>
                  Author:
                  <select
                    className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                    name="author"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Author</option>
                    {authors.map((author) => (
                      <option key={author.id} value={author.id}>
                        {author.first_name} {author.last_name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <label>
                  Category:
                  <select
                    className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                    name="category"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="w-full">
                <label>
                  Publisher:
                  <select
                    className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                    name="publisher"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Publisher</option>
                    {publishers.map((publisher) => (
                      <option key={publisher.id} value={publisher.name}>
                        {publisher.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <label>
                  Language:
                  <select
                    className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                    name="language"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Language</option>
                    <option value="Bangla">Bangla</option>
                    <option value="English">English</option>
                  </select>
                </label>
              </div>
              <div className="w-full">
                <label>
                  ISBN:
                  <input
                    className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                    type="number"
                    name="isbn"
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <label>
                  Page Count:
                  <input
                    className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                    type="number"
                    name="pages"
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="w-full">
                <label>
                  Edition:
                  <input
                    className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                    type="text"
                    name="edition"
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <label>
                  Quantity:
                  <input
                    className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                    type="number"
                    name="quantity"
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="w-full">
                <label>
                  Publication Date:
                  <input
                    className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                    type="date"
                    name="publication_date"
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <label>
                  Price:
                  <input
                    className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                    type="number"
                    name="price"
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="w-full">
                <label>
                  Avatar:
                  <input
                    className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                    type="file"
                    name="cover"
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
            </div>
            <button
              className="uppercase text-sm font-bold border-0 rounded px-4 py-2 bg-sky-500 hover:bg-sky-900"
              type="submit"
            >
              Add Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;

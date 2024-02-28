import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bookData, setBookData] = useState({
    title: '',
    language: '',
    isbn: '',
    pages: '',
    edition: '',
    publication_date: '',
    quantity: 0,
    author: '',
    category: '',
    price: 0,
    description: '',
  });
  const [cover, setCover] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'cover') {
      setCover(e.target.files[0]);
    } else {
      setBookData({ ...bookData, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    fetch(`https://e-library-z7s7.onrender.com/book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBookData(data);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('access_token');
    const apiUrl = `https://e-library-z7s7.onrender.com/book/${id}/`;

    try {
      const formData = new FormData();
      formData.append('title', bookData.title);
      formData.append('language', bookData.language);
      formData.append('isbn', bookData.isbn);
      formData.append('pages', bookData.pages);
      formData.append('edition', bookData.edition);
      formData.append('quantity', bookData.quantity);
      formData.append('price', bookData.price);
      formData.append('description', bookData.description);
      formData.append('publication_date', bookData.publication_date);

      formData.append('author', bookData.author.id);
      formData.append('category', bookData.category.id);

      formData.append('cover', cover);

      const response = await fetch(apiUrl, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        console.log('Book updated successfully!');
        navigate('/dashboard/books');
      } else {
        const errorData = await response.json();
        console.error('Failed Updating book:', errorData);
      }
    } catch (error) {
      console.error('Error during updating book:', error);
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
            <div className="flex flex-col">
              <label
                htmlFor="cover-image-upload"
                className="flex justify-center"
              >
                <img
                  src={cover ? URL.createObjectURL(cover) : bookData.cover}
                  alt={bookData.title}
                  className="w-40 h-48 bg-gray-200 object-cover mb-2 cursor-pointer"
                />
                <input
                  type="file"
                  id="cover-image-upload"
                  className="sr-only"
                  accept="image/*"
                  name="cover"
                  onChange={handleChange}
                />
              </label>
              <button
                type="button"
                onClick={() =>
                  document.getElementById('cover-image-upload').click()
                }
                className="w-1/2 mx-auto bg-gray-700 hover:bg-opacity-70 text-white px-2 mb-4 rounded"
              >
                Upload Image
              </button>
            </div>
            <div className="flex gap-2">
              <div className="w-full ">
                <label>
                  Title:
                  <input
                    className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                    type="text"
                    name="title"
                    value={bookData.title}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="w-full">
                <label>
                  Author:
                  <input
                    className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                    type="text"
                    name="author"
                    value={`${bookData?.author?.first_name} ${bookData?.author?.last_name}`}
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
                    className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                    type="text"
                    name="category"
                    value={bookData?.category?.title}
                    onChange={handleChange}
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
                    value={bookData.edition}
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
                    className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                    type="text"
                    name="language"
                    value={bookData.language}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="w-full">
                <label>
                  ISBN:
                  <input
                    className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                    type="number"
                    name="isbn"
                    value={bookData.isbn}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <label>
                  Pages:
                  <input
                    className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                    type="number"
                    name="pages"
                    value={bookData.pages}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="w-full">
                <label>
                  Quantity:
                  <input
                    className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                    type="number"
                    name="quantity"
                    value={bookData.quantity}
                    onChange={handleChange}
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
                    value={bookData.price}
                    onChange={handleChange}
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
                    value={bookData.publication_date}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="w-full">
              <label>
                Description:
                <textarea
                  rows={5}
                  className="w-full py-2 mb-2 rounded px-4 bg-gray-100"
                  type="text"
                  name="description"
                  value={bookData.description}
                  onChange={handleChange}
                />
              </label>
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

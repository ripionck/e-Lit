'use client';
import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import PaginationX from '../../../components/Pagination';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://e-library-z7s7.onrender.com/book/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const token = localStorage.getItem('access_token');
  const handleDelete = (id) => {
    fetch(`https://e-library-z7s7.onrender.com/book/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete book');
        }
        // Remove the deleted book from the state
        setBooks(books.filter((author) => author.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting book:', error);
      });
  };

  return (
    <div className="h-screen overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Cover</Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Author</Table.HeadCell>
          <Table.HeadCell>Edition</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Publisher</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {books.map((book, id) => (
            <Table.Row
              key={id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>
                <img className="h-8 w-8" src={book.cover} alt={book.title} />
              </Table.Cell>
              <Table.Cell>{book.title}</Table.Cell>
              <Table.Cell>{book.author}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>{book.edition}</Table.Cell>
              <Table.Cell>{book.publisher}</Table.Cell>
              <Table.Cell>{book.quantity}</Table.Cell>
              <Table.Cell>
                <div className="flex gap-4">
                  <a
                    href={`/edit-book/${book.id}`}
                    className="font-medium mx-4 text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                  <button
                    className="font-medium text-red-600 hover:underline dark:text-red-500"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </button>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <PaginationX />
    </div>
  );
};
export default Books;

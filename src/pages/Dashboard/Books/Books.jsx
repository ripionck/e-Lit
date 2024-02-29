'use client';
import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Pagination } from 'flowbite-react';
import Loading from '../../../components/Spinner';

const Books = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://e-library-z7s7.onrender.com/book/?p=${currentPage}`
      );
      const data = await response.json();
      setBooks(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

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
  const onPageChange = (page) => setCurrentPage(page);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="h-screen overflow-x-auto">
            <Table striped>
              <Table.Head>
                <Table.HeadCell>Cover</Table.HeadCell>
                <Table.HeadCell>Title</Table.HeadCell>
                <Table.HeadCell>Author</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Edition</Table.HeadCell>
                <Table.HeadCell>Publisher</Table.HeadCell>
                <Table.HeadCell>Quantity</Table.HeadCell>
                <Table.HeadCell></Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {books.map((book, id) => (
                  <Table.Row
                    key={id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell>
                      <img
                        className="h-8 w-8"
                        src={book.cover}
                        alt={book.title}
                      />
                    </Table.Cell>
                    <Table.Cell>{book.title}</Table.Cell>
                    <Table.Cell>{`${book?.author?.first_name} ${book?.author?.last_name}`}</Table.Cell>
                    <Table.Cell>{book.category.title}</Table.Cell>
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
          </div>
          <div className="flex justify-center my-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
              showIcons
            />
          </div>
        </>
      )}
    </>
  );
};
export default Books;

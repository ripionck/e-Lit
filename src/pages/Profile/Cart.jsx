'use client';
import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner';

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const token = localStorage.getItem('access_token');

  useEffect(() => {
    setLoading(true);
    fetch('https://e-library-z7s7.onrender.com/cart/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [token]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full overflow-y-auto">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Title</Table.HeadCell>
              <Table.HeadCell>Amount</Table.HeadCell>
              <Table.HeadCell>Quantity</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {books.map((book) => (
                <Table.Row
                  key={book.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>{book.book}</Table.Cell>
                  <Table.Cell>{book.amount}</Table.Cell>
                  <Table.Cell>{book.quantity}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      )}
    </>
  );
};
export default Cart;

import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner';

const Report = () => {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  const token = localStorage.getItem('access_token');
  useEffect(() => {
    setLoading(true);
    fetch(' https://e-library-z7s7.onrender.com/transaction-report/', {
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
        setTransactions(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="overflow-x-auto mt-2">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Transaction ID</Table.HeadCell>
              <Table.HeadCell>Amount</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {transactions.map((transaction, id) => (
                <Table.Row
                  key={id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>ID: {transaction.id}</Table.Cell>
                  <Table.Cell>{transaction.amount}$</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      )}
    </>
  );
};
export default Report;

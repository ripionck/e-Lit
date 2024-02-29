import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import Loading from '../../../components/Spinner';

const Publishers = () => {
  const [loading, setLoading] = useState(true);
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://e-library-z7s7.onrender.com/publisher/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPublishers(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="h-screen overflow-x-auto">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Logo</Table.HeadCell>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Address</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {publishers.map((publisher, id) => (
                <Table.Row
                  key={id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>
                    <img
                      className="h-8 w-8"
                      src={publisher.logo}
                      alt={publisher.name}
                    />
                  </Table.Cell>
                  <Table.Cell>{publisher.name}</Table.Cell>
                  <Table.Cell>{publisher.address}</Table.Cell>
                  <Table.Cell>
                    <a
                      href={`/edit-publisher/${publisher.id}`}
                      className="font-medium mx-4 text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </a>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      )}
    </>
  );
};
export default Publishers;

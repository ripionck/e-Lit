'use client';

import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch(' https://e-library-z7s7.onrender.com/author/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setAuthors(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  return (
    <div className="h-screen overflow-x-auto mt-6">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Avatar</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {authors.map((author, id) => (
            <Table.Row
              key={id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>
                <img
                  className="h-8 w-8"
                  src={author.avater}
                  alt={author.title}
                />
              </Table.Cell>
              <Table.Cell>
                {author.first_name} {author.last_name}
              </Table.Cell>
              <Table.Cell>{author.description}</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium mx-4 text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline dark:text-red-500"
                >
                  Delete
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
export default Authors;

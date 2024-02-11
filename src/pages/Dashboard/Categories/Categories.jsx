'use client';

import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(' https://e-library-z7s7.onrender.com/category/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  return (
    <div className="h-screen overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Category Name</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {categories.map((category, id) => (
            <Table.Row
              key={id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>{category.title}</Table.Cell>

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
export default Categories;

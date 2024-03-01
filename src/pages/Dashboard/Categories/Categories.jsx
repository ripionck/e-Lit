import { Spinner, Table } from 'flowbite-react';
import { useEffect, useState } from 'react';

const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://e-library-z7s7.onrender.com/category/')
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
      })
      .finally(() => setLoading(false));
  }, []);

  const token = localStorage.getItem('access_token');
  const handleDelete = async (categoryId) => {
    try {
      const response = await fetch(
        `https://e-library-z7s7.onrender.com/category/${categoryId}`,
        {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        // Filter out the deleted category from the categories array
        setCategories(
          categories.filter((category) => category.id !== categoryId)
        );
        console.log('Category deleted successfully');
      } else {
        console.error('Failed to delete category');
      }
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <>
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
      ) : (
        <div className="h-screen overflow-y-auto">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Category Name</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {categories.map((category) => (
                <Table.Row
                  key={category.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>{category.title}</Table.Cell>
                  <Table.Cell>
                    <button
                      onClick={() => handleDelete(category.id)}
                      className="font-medium text-red-600 hover:underline dark:text-red-500"
                    >
                      Delete
                    </button>
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

export default Categories;

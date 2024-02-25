import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://e-library-z7s7.onrender.com/accounts/all-user/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(
        `https://e-library-z7s7.onrender.com/accounts/delete/${userId}`,
        {
          method: 'DELETE',
        }
      );

      if (response.ok) {
        // Filter out the deleted user from the users array
        setUsers(users.filter((user) => user.id !== userId));
        console.log('User deleted successfully');
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="h-screen overflow-y-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Avatar</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Phone</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>{' '}
          {/* Added Delete header cell */}
        </Table.Head>
        <Table.Body className="divide-y">
          {users.map((user) => (
            <Table.Row
              key={user.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>
                <img
                  className="h-8 w-8"
                  src={user.avater}
                  alt={user.first_name}
                />
              </Table.Cell>
              <Table.Cell>
                {user.first_name} {user.last_name}
              </Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.phone}</Table.Cell>
              <Table.Cell>
                <button
                  onClick={() => handleDelete(user.id)}
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
  );
};

export default Users;

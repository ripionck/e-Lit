import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomNavbar = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('access_token');

      try {
        const response = await fetch(
          'https://e-library-z7s7.onrender.com/accounts/user/',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        // setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const isAuthenticated = () => {
    return !!localStorage.getItem('access_token');
  };

  const logout = () => {
    localStorage.clear();
    navigate('/login'); // Navigate to the login page after logout
  };

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>

        {isAuthenticated() ? (
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{userData.username}</span>
                <span className="block truncate text-sm font-medium">
                  {userData.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown>
          </div>
        ) : (
          <div>
            <Navbar.Link href="/register">Register</Navbar.Link>
            <Navbar.Link href="/login">Login</Navbar.Link>
          </div>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

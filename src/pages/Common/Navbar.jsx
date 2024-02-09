import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HiArrowSmRight,
  HiChartPie,
  HiUser,
  HiOutlineViewList,
  HiOutlinePlusCircle,
} from 'react-icons/hi';

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
      <Navbar.Brand>
        <img
          src="/src/assets/logo.png"
          className="mr-3 lg:h-20 h-12"
          alt="Logo"
        />
        <span className="self-center whitespace-nowrap text-2xl  font-semibold dark:text-white">
          E-Lit Emporium
        </span>
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-lg">
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="text-lg">
          About
        </Navbar.Link>
        <Navbar.Link href="#" className="text-lg">
          Services
        </Navbar.Link>
        <Navbar.Link href="#" className="text-lg">
          Contact
        </Navbar.Link>

        {isAuthenticated() ? (
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                userData && userData.avatar ? (
                  <Avatar alt="User Avatar" img={userData.avatar} rounded />
                ) : (
                  <Avatar rounded />
                )
              }
            >
              <Dropdown.Header>
                {/* <span className="block text-sm">{userData.username}</span>
                <span className="block truncate text-sm font-medium">
                  {userData.email}
                </span> */}
              </Dropdown.Header>
              <Dropdown.Item href="dashboard" icon={HiChartPie}>
                Dashboard
              </Dropdown.Item>
              <Dropdown.Item href="profile" icon={HiUser}>
                Profile
              </Dropdown.Item>
              <Dropdown.Item href="book-list" icon={HiOutlineViewList}>
                Book List
              </Dropdown.Item>
              <Dropdown.Item icon={HiOutlinePlusCircle}>Add Book</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={logout} icon={HiArrowSmRight}>
                Logout
              </Dropdown.Item>
            </Dropdown>
          </div>
        ) : (
          <div className="lg:flex gap-4">
            <Navbar.Link href="/register" className="text-lg">
              Register
            </Navbar.Link>
            <Navbar.Link href="/login" className="text-lg">
              Login
            </Navbar.Link>
          </div>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

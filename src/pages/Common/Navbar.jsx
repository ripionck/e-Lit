import { Dropdown, Navbar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import {
  HiArrowSmRight,
  HiUser,
  HiOutlineViewList,
  HiOutlinePlusCircle,
  HiOutlineCurrencyDollar,
} from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from '../../components/DropMenu';

const CustomNavbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const isAuthenticated = () => {
    return !!localStorage.getItem('access_token');
  };

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const token = localStorage.getItem('access_token');

  useEffect(() => {
    fetch('https://e-library-z7s7.onrender.com/accounts/user/', {
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
        setUser(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const books = [
    { id: 1, name: 'Book 1' },
    { id: 2, name: 'Book 2' },
    { id: 3, name: 'Book 3' },
    { id: 1, name: 'Book 1' },
    { id: 2, name: 'Book 2' },
    { id: 3, name: 'Book 3' },
  ];

  const authors = [
    { id: 1, name: 'Author 1' },
    { id: 2, name: 'Author 2' },
    { id: 3, name: 'Author 3' },
  ];
  const publications = [
    { id: 1, name: 'Publication 1' },
    { id: 2, name: 'Publication 2' },
    { id: 3, name: 'Publication 3' },
  ];

  return (
    <>
      <Navbar fluid rounded className="bg-gray-100">
        <Navbar.Brand>
          <img
            src="/src/assets/E-Lit_Emporium.png"
            className="lg:w-2/3 md:1/2 w-full"
            alt="Logo"
          />
        </Navbar.Brand>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-md px-4 mx-auto flex-grow"
        >
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-8 pr-4 text-gray-500 border rounded-full outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            />
          </div>
        </form>
        <Navbar.Toggle />
        <Navbar.Collapse className="px-8">
          {isAuthenticated() ? (
            <div className="flex md:order-2">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <img
                    src={user ? user?.avater : 'placeholder.jpg'}
                    alt="Profile Image"
                    className="w-12 h-12 bg-gray-200 rounded-full object-cover"
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user?.username}</span>
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item href="/profile" icon={HiUser}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item href="/book-list" icon={HiOutlineViewList}>
                  Book List
                </Dropdown.Item>
                <Dropdown.Item href="/deposit" icon={HiOutlineCurrencyDollar}>
                  Deposit
                </Dropdown.Item>
                <Dropdown.Item href="/add-author" icon={HiOutlinePlusCircle}>
                  Add Author
                </Dropdown.Item>
                <Dropdown.Item href="/add-book" icon={HiOutlinePlusCircle}>
                  Add Book
                </Dropdown.Item>
                <Dropdown.Item
                  href="/dashboard/authors"
                  icon={HiOutlinePlusCircle}
                >
                  Dashboard
                </Dropdown.Item>

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
      <Navbar collapseOnSelect expand="md">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Link href="/" className="text-lg">
            Home
          </Navbar.Link>
          <DropdownMenu items={books} menuName="Books" />
          <DropdownMenu items={authors} menuName="Authors" />
          <DropdownMenu items={publications} menuName="Publications" />
          <Navbar.Link href="/about" className="text-lg">
            Offer Books
          </Navbar.Link>
          <Navbar.Link href="/about" className="text-lg">
            New Books
          </Navbar.Link>
          <Navbar.Link href="/about" className="text-lg">
            About
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default CustomNavbar;

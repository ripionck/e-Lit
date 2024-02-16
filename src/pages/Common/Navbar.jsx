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
import { CiSearch } from 'react-icons/ci';

const CustomNavbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  console.log(user);
  const isAuthenticated = () => {
    return !!localStorage.getItem('access_token');
  };

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const token = localStorage.getItem('access_token');

  useEffect(() => {
    fetch('https://e-library-z7s7.onrender.com/accounts/profile/', {
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
        console.log(data);
        setUser(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const categories = [
    { id: 1, name: 'Book 1' },
    { id: 2, name: 'Book 2' },
    { id: 3, name: 'Book 3' },
    { id: 4, name: 'Book 4' },
    { id: 5, name: 'Book 5' },
    { id: 6, name: 'Book 6' },
    { id: 7, name: 'Book 7' },
    { id: 8, name: 'Book 8' },
    { id: 9, name: 'Book 9' },
    { id: 10, name: 'Book 10' },
  ];

  const authors = [
    { id: 1, name: 'Author 1' },
    { id: 2, name: 'Author 2' },
    { id: 3, name: 'Author 3' },
    { id: 1, name: 'Author 1' },
    { id: 2, name: 'Author 2' },
    { id: 3, name: 'Author 3' },
    { id: 1, name: 'Author 1' },
    { id: 2, name: 'Author 2' },
    { id: 3, name: 'Author 3' },
  ];
  const publishers = [
    { id: 1, name: 'Publisher 1' },
    { id: 2, name: 'Publisher 2' },
    { id: 3, name: 'Publisher 3' },
  ];

  return (
    <>
      <Navbar fluid rounded className="bg-gray-100">
        {/* --------------Logo---------------- */}
        <Navbar.Brand>
          <img
            src="/src/assets/E-Lit_Emporium.png"
            className="lg:w-2/3 md:1/2 w-full"
            alt="Logo"
          />
        </Navbar.Brand>
        {/* ----------Navbar search input--------------*/}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-md px-4 mx-auto flex-grow"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-8 pr-2 text-gray-500 border rounded-full outline-none bg-gray-50 focus:bg-white focus:border-gray-600"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <CiSearch />
            </span>
          </div>
        </form>
        <Navbar.Toggle />
        {/* --------------Navbar Collapse----------------- */}
        <Navbar.Collapse className="px-8">
          {isAuthenticated() ? (
            <div className="flex md:order-2">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <img
                    src={user ? user.avater : 'placeholder.jpg'}
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
                <Dropdown.Item href="/add-publisher" icon={HiOutlinePlusCircle}>
                  Add Publisher
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
      {/* ----------------Navbar items------------------ */}
      <Navbar collapseonselect="true" expand="md">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Link href="/" className="text-lg">
            Home
          </Navbar.Link>
          <DropdownMenu items={categories} menuName="Categories" />
          <DropdownMenu items={authors} menuName="Authors" />
          <DropdownMenu items={publishers} menuName="Publishers" />
          <Navbar.Link href="/about" className="text-lg">
            e-Books
          </Navbar.Link>
          <Navbar.Link href="/about" className="text-lg">
            Foreign Books
          </Navbar.Link>
          <Navbar.Link href="/about" className="text-lg">
            About Us
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default CustomNavbar;

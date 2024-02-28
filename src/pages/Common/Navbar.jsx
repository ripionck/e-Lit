import { Dropdown, Navbar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import {
  HiArrowSmRight,
  HiUser,
  HiOutlinePlusCircle,
  HiOutlineCurrencyDollar,
} from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from '../../components/DropMenu';
import { CiSearch } from 'react-icons/ci';

const CustomNavbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Redirect to the search results page with the search query as a parameter
    navigate(`/book-list?search=${encodeURIComponent(searchQuery)}`);
  };

  // -----------getting user------------------//
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
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
          setUser(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, []);

  const isAuthenticated = () => {
    return !!localStorage.getItem('access_token');
  };

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  useEffect(() => {
    fetch('https://e-library-z7s7.onrender.com/category/')
      .then((res) => res.json())
      .then((data) => setCategories(data));

    fetch('https://e-library-z7s7.onrender.com/author/')
      .then((res) => res.json())
      .then((data) => setAuthors(data));

    fetch('https://e-library-z7s7.onrender.com/publisher/all/')
      .then((res) => res.json())
      .then((data) => setPublishers(data));
  }, []);

  return (
    <>
      <Navbar fluid rounded className="bg-gray-100">
        {/* -------------Logo----------------- */}
        <Navbar.Brand>
          <img
            src="/src/assets/E-Lit_Emporium.png"
            className="lg:w-2/3 md:1/2 w-full"
            alt="Logo"
          />
        </Navbar.Brand>
        {/* ---------------Navbar search input---------------- */}
        <form
          className="max-w-md px-4 mx-auto flex-grow"
          onSubmit={handleSearch}
        >
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by book, author, or language"
              className="w-full py-2 pl-8 pr-2 text-gray-500 border rounded-full outline-none bg-gray-50 focus:bg-white focus:border-gray-600"
            />
            <button
              type="submit"
              className="absolute right-5 top-1/2 transform -translate-y-1/2 hover:cursor-pointer text-gray-400"
            >
              <CiSearch />
            </button>
          </div>
        </form>
        <Navbar.Toggle />
        {/* ---------------Navbar Collapse----------------- */}
        <Navbar.Collapse className="px-8">
          {isAuthenticated() && user?.is_active ? (
            <div className="flex md:order-2">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <img
                    src={user?.avater}
                    alt={user?.username}
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
                <Dropdown.Item href="/deposit" icon={HiOutlineCurrencyDollar}>
                  Deposit
                </Dropdown.Item>
                {user.is_publisher && (
                  <>
                    <Dropdown.Item
                      href="/add-publisher"
                      icon={HiOutlinePlusCircle}
                    >
                      Add Publisher
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/add-author"
                      icon={HiOutlinePlusCircle}
                    >
                      Add Author
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/add-category"
                      icon={HiOutlinePlusCircle}
                    >
                      Add Category
                    </Dropdown.Item>
                    <Dropdown.Item href="/add-book" icon={HiOutlinePlusCircle}>
                      Add Book
                    </Dropdown.Item>
                  </>
                )}
                {user.is_staff && (
                  <Dropdown.Item
                    href="/dashboard/authors"
                    icon={HiOutlinePlusCircle}
                  >
                    Dashboard
                  </Dropdown.Item>
                )}
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
      {/* -------------------Navbar items----------------- */}
      <Navbar collapseonselect="true" expand="md">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Link href="/" className="text-lg">
            Home
          </Navbar.Link>
          <DropdownMenu items={categories} menuName="Categories" />
          <DropdownMenu items={authors} menuName="Authors" />
          <DropdownMenu items={publishers} menuName="Publishers" />
          <Navbar.Link href="/books" className="text-lg">
            Books
          </Navbar.Link>
          <Navbar.Link href="*" className="text-lg">
            Events
          </Navbar.Link>
          <Navbar.Link href="*" className="text-lg">
            Articles
          </Navbar.Link>
          <Navbar.Link href="*" className="text-lg">
            Audio
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default CustomNavbar;

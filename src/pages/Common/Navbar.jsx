import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import {
  HiArrowSmRight,
  HiUser,
  HiOutlineViewList,
  HiOutlinePlusCircle,
  HiOutlineCurrencyDollar,
} from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const CustomNavbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = () => {
    return !!localStorage.getItem('access_token');
  };

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <>
      <Navbar fluid rounded className="bg-gray-100">
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

        <Navbar.Collapse className="px-8">
          <Navbar.Link href="/" className="text-lg">
            Home
          </Navbar.Link>
          <Navbar.Link href="/about" className="text-lg">
            About
          </Navbar.Link>
          <Navbar.Link href="/book-list" className="text-lg">
            All Books
          </Navbar.Link>

          {isAuthenticated() ? (
            <div className="flex md:order-2">
              <Dropdown
              // arrowIcon={false}
              // inline
              // label={
              //   values && values?.avater ? (
              //     <img src={values?.avater} alt="User Avatar" />
              //   ) : (
              //     <Avatar rounded />
              //   )
              // }
              >
                <Dropdown.Header>
                  {/* <span className="block text-sm">{values?.username}</span>
                  <span className="block truncate text-sm font-medium">
                    {values?.email}
                  </span>
                  <span className="block truncate text-sm font-medium">
                    $ {values?.balance}
                  </span> */}
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
    </>
  );
};

export default CustomNavbar;

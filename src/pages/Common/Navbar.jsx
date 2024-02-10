import { useEffect, useState } from 'react';
import {
  Avatar,
  Dropdown,
  Navbar,
  Modal,
  Label,
  TextInput,
  Button,
  FileInput,
  Alert,
  Spinner,
} from 'flowbite-react';
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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    avater: null,
    balance: 0,
  });
  console.log(formData);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const isAuthenticated = () => {
    return !!localStorage.getItem('access_token');
  };

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const handleProfileClick = () => {
    setOpenProfileModal(true);
  };

  const onCloseProfileModal = () => {
    setOpenProfileModal(false);
  };
  const token = localStorage.getItem('access_token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://e-library-z7s7.onrender.com/accounts/user/',
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        setUser(data);
        setFormData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://e-library-z7s7.onrender.com/accounts/user/',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      console.log('Success:', result);
      if (!response.ok) {
        throw new Error('Failed to update user information');
      }
      setSuccessMessage('User information updated successfully');
      navigate('/');
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center">
        <Spinner aria-label="Default status example" />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Alert color="error">
          <span className="text-red-700 font-medium">
            Profile update failed! Please try again.
          </span>
        </Alert>
      </div>
    );
  }

  return (
    <>
      <Modal
        show={openProfileModal}
        size="xl"
        onClose={onCloseProfileModal}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Your Profile
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Username" />
              </div>
              <TextInput
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                value={user?.username}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-4">
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="firstName" value="First Name" />
                </div>
                <TextInput
                  id="firstName"
                  name="first_name"
                  placeholder="First name"
                  value={user?.first_name}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="lastName" value="Last Name" />
                </div>
                <TextInput
                  id="lastName"
                  name="last_name"
                  placeholder="Last name"
                  value={user?.last_name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email Address" />
              </div>
              <TextInput
                id="email"
                name="email"
                placeholder="example@gmail.com"
                value={user?.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-4">
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="phone" value="Phone Number" />
                </div>
                <TextInput
                  id="phone"
                  name="phone"
                  value={user?.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="balance" value="Account Balance" />
                </div>
                <TextInput
                  id="balance"
                  name="balance"
                  value={user?.balance}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div className="block mb-2">
                <Label htmlFor="multiple-file-upload" value="Profile Image" />
              </div>
              <FileInput
                id="multiple-file-upload"
                name="avater"
                type="file"
                onChange={handleChange}
                multiple
              />
            </div>

            <div className="w-full mt-4">
              <Button onClick={handleUpdate}>Update Now</Button>
            </div>

            {successMessage && (
              <span className="text-green-700 font-medium">
                Profile update successful!
              </span>
            )}
            <div className="w-full">
              <a
                href="change-password"
                className="hover:underline cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
              >
                Change password?
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
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

        <Navbar.Collapse>
          <Navbar.Link href="/" className="text-lg">
            Home
          </Navbar.Link>
          <Navbar.Link href="about" className="text-lg">
            About
          </Navbar.Link>
          <Navbar.Link href="services" className="text-lg">
            Services
          </Navbar.Link>
          <Navbar.Link href="contact" className="text-lg">
            Contact
          </Navbar.Link>

          {isAuthenticated() ? (
            <div className="flex md:order-2">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  user && user.avater ? (
                    <Avatar alt="User Avatar" src={user?.avater} rounded />
                  ) : (
                    <Avatar rounded />
                  )
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user?.username}</span>
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item href="dashboard" icon={HiChartPie}>
                  Dashboard
                </Dropdown.Item>
                <Dropdown.Item onClick={handleProfileClick} icon={HiUser}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item href="book-list" icon={HiOutlineViewList}>
                  Book List
                </Dropdown.Item>
                <Dropdown.Item icon={HiOutlinePlusCircle}>
                  Add Book
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

import { useEffect, useState } from 'react';
import {
  Avatar,
  Dropdown,
  Navbar,
  Modal,
  Label,
  TextInput,
  Button,
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
  const [loading, setLoading] = useState(true);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [values, setValues] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    balance: 0,
  });

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
        setLoading(false);
        setValues({
          ...values,
          username: data.username,
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          phone: data.phone,
        });
      })
      .catch((error) => {
        setLoading(true);
        console.error('Error:', error);
      });
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    await fetch('https://e-library-z7s7.onrender.com/accounts/user/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        console.log(res);
        setUpdateSuccess(true);
        onCloseProfileModal();
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        setUpdateSuccess(false);
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center">
        <Spinner aria-label="Default status example" />
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
            <form onSubmit={handleUpdate}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="username" value="Username" />
                </div>
                <TextInput
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={values?.username}
                  onChange={(e) =>
                    setValues({ ...values, username: e.target.value })
                  }
                  required
                />
              </div>
              <div className="flex gap-4">
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="first_name" value="First Name" />
                  </div>
                  <TextInput
                    id="first_name"
                    name="first_name"
                    type="text"
                    placeholder="First name"
                    value={values?.first_name}
                    onChange={(e) =>
                      setValues({ ...values, first_name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="last_name" value="Last Name" />
                  </div>
                  <TextInput
                    id="last_name"
                    type="text"
                    name="last_name"
                    placeholder="Last name"
                    value={values?.last_name}
                    onChange={(e) =>
                      setValues({ ...values, last_name: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email Address" />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={values?.email}
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="flex gap-4">
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="phone" value="Phone Number" />
                  </div>
                  <TextInput
                    id="phone"
                    type="number"
                    name="phone"
                    value={values?.phone}
                    onChange={(e) =>
                      setValues({ ...values, phone: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="balance" value="Account Balance" />
                  </div>
                  <TextInput
                    id="balance"
                    type="number"
                    name="balance"
                    value={values?.balance}
                    onChange={(e) =>
                      setValues({ ...values, balance: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              {/* <div>
                <div className="block mb-2">
                  <Label htmlFor="multiple-file-upload" value="Profile Image" />
                </div>
                <FileInput
                  id="multiple-file-upload"
                  name="avater"
                  type="file"
                  value={values?.avater}
                  onChange={(e) =>
                    setValues({ ...values, avater: e.target.value })
                  }
                  multiple
                />
              </div> */}

              <div className="w-full mt-4">
                <Button type="submit">Update Now</Button>
              </div>
            </form>

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
                  values && values?.avater ? (
                    <img src={values?.avater} alt="User Avatar" />
                  ) : (
                    <Avatar rounded />
                  )
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{values?.username}</span>
                  <span className="block truncate text-sm font-medium">
                    {values?.email}
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

import { useState } from 'react';
import {
  Avatar,
  Dropdown,
  Navbar,
  Modal,
  Label,
  TextInput,
  Button,
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
  const [userData, setUserData] = useState(null);
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [email, setEmail] = useState('');
  const isAuthenticated = () => {
    return !!localStorage.getItem('access_token');
  };

  const logout = () => {
    localStorage.clear();
    navigate('/login'); // Navigate to the login page after logout
  };

  const handleProfileClick = () => {
    setOpenProfileModal(true);
  };

  const onCloseProfileModal = () => {
    setOpenProfileModal(false);
    setEmail('');
  };

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
                placeholder="Your username"
                // value={username} // assuming you have 'username' state
                // onChange={(event) => setUsername(event.target.value)}
                required
              />
            </div>
            <div className="flex gap-4">
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="firstName" value="First Name" />
                </div>
                <TextInput
                  id="firstName"
                  placeholder="Your first name"
                  // value={firstName} // assuming you have 'firstName' state
                  // onChange={(event) => setFirstName(event.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="lastName" value="Last Name" />
                </div>
                <TextInput
                  id="lastName"
                  placeholder="Your last name"
                  // value={lastName} // assuming you have 'lastName' state
                  // onChange={(event) => setLastName(event.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="lastName" value="Your Email" />
              </div>
              <TextInput
                id="lastName"
                placeholder="Your Email"
                // value={lastName} // assuming you have 'lastName' state
                // onChange={(event) => setLastName(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="block">
                <Label htmlFor="image" value="Profile Image URL" />
              </div>
              <TextInput
                id="image"
                type="file"
                placeholder="URL to your profile image"
                // value={image} // assuming you have 'image' state
                // onChange={(event) => setImage(event.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="balance" value="Account Balance" />
              </div>
              <TextInput
                id="balance"
                placeholder="Your account balance"
                // value={balance} // assuming you have 'balance' state
                // onChange={(event) => setBalance(event.target.value)}
                required
              />
            </div>
            <div className="w-full">
              {/* <Button onClick={handleUpdateProfile}>Change Password</Button> */}
              <Button>Update Now</Button>
            </div>
            <div className="w-full">
              {/* <Button onClick={handleChangePassword}>Update Profile</Button> */}
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

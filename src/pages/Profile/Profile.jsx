'use client';

import { Card, Modal, Label, TextInput, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import Cart from './Cart';
import Report from './Report';

const Profile = () => {
  const navigate = useNavigate();
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [openReportModal, setOpenReportModal] = useState(false);
  const [values, setValues] = useState({
    avater: null,
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    balance: 0,
  });
  const [profileImage, setProfileImage] = useState('');
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('access_token');

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://e-library-z7s7.onrender.com/accounts/profile/',
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
      setValues(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching profile data:', error);
      setLoading(false);
    }
  };

  const handleProfileClick = () => {
    setOpenProfileModal(true);
  };

  const onCloseProfileModal = () => {
    setOpenProfileModal(false);
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProfileImage(imageFile);
    setValues((prevValues) => ({ ...prevValues }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('avater', profileImage);
    formData.append('username', values.username);
    formData.append('first_name', values.first_name);
    formData.append('last_name', values.last_name);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('balance', values.balance);

    try {
      const response = await fetch(
        'https://e-library-z7s7.onrender.com/accounts/profile/',
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      if (response.ok) {
        await fetchProfileData();
        onCloseProfileModal();
        navigate('/profile');
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error during profile update:', error);
    }
  };
  const handleShowReport = () => {
    setOpenReportModal(true);
  };

  const onCloseReportModal = () => {
    setOpenReportModal(false);
  };
  return (
    <>
      {/* -----------------Profile Update Modal--------------- */}
      <Modal
        show={openProfileModal}
        size="xl"
        onClose={onCloseProfileModal}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <form onSubmit={handleUpdate}>
              {/* -------------------Profile Image Upload------------------ */}
              <div className="flex flex-col">
                <label
                  htmlFor="profile-image-upload"
                  className="flex justify-center"
                >
                  <img
                    src={
                      profileImage
                        ? URL.createObjectURL(profileImage)
                        : values.avater
                    }
                    alt={`${values.first_name} ${values.last_name}`}
                    className="w-32 h-32 bg-gray-200 rounded-full object-cover mb-2 cursor-pointer"
                  />
                  <input
                    type="file"
                    id="profile-image-upload"
                    className="sr-only"
                    accept="image/*"
                    name="avatar"
                    onChange={handleImageChange}
                  />
                </label>
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById('profile-image-upload').click()
                  }
                  className="w-1/2 mx-auto bg-gray-700 hover:bg-opacity-70 text-white px-2 mb-4 rounded"
                >
                  Upload Image
                </button>
              </div>
              {/* ------------------Profile Form Fields--------------------- */}
              <div className="flex gap-4">
                <div className="w-full">
                  <Label htmlFor="username" value="Username" />
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
                <div className="w-full">
                  <Label htmlFor="first_name" value="First Name" />
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
                  <Label htmlFor="last_name" value="Last Name" />
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
              <div className="flex gap-4">
                <div className="w-full">
                  <Label htmlFor="email" value="Email Address" />
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
                <div className="w-full">
                  <Label htmlFor="phone" value="Phone Number" />
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
              </div>
              <div>
                <Label htmlFor="balance" value="Account Balance" />
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
              {/* -----------------Update Button----------------- */}
              <div className="w-full mt-4">
                <Button type="submit">Update Now</Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      {/* ------------------Profile Card and Additional Details--------------- */}
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col lg:flex-row sm:flex-col p-2">
          {/* ----------------Profile Card----------------- */}
          <Card className="max-w-sm lg:w-80 lg:h-1/2 w-full">
            <div className="flex flex-col">
              <img
                src={values.avater}
                alt="Profile Image"
                className="w-32 h-32 bg-gray-200  rounded-full object-cover mb-2"
              />
              <div>
                <h4 className="mb-1 text-sm font-medium text-gray-900 dark:text-white">
                  Username: {values.username}
                </h4>
                <h4 className="text-sm text-gray-500 dark:text-gray-400">
                  Name: {values.first_name} {values.last_name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email: {values.email}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Phone: {values.phone}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Balance: {values.balance}$
                </p>
                {/* --------------Edit Profile Button------------- */}
                <button
                  onClick={handleProfileClick}
                  className="bg-gray-700 hover:bg-opacity-70 text-white px-2 mb-2 rounded"
                >
                  Edit Profile
                </button>
                {/* --------------Transaction History Button------------- */}
                <button
                  onClick={handleShowReport}
                  className="bg-gray-700 hover:bg-opacity-70 text-white px-2 ml-4 mb-2 rounded"
                >
                  Transaction History
                </button>
                {/* ---------Change Password Link----------- */}
                <div>
                  <a
                    href="change-password"
                    className="hover:underline cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
                  >
                    Change password?
                  </a>
                </div>
              </div>
            </div>
          </Card>
          {/* -------Cart and Transaction Report------- */}
          <div className="w-2/3 ml-0 lg:ml-4 md:ml-4">
            <Cart />
          </div>
        </div>
      )}
      {/* ----------Transaction History Modal--------------- */}
      <Modal
        show={openReportModal}
        size="xl"
        onClose={onCloseReportModal}
        popup
      >
        <Modal.Header>Transaction History</Modal.Header>
        <Modal.Body>
          <Report />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Profile;

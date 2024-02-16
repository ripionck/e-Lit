'use client';

import { Card, Modal, Label, TextInput, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Report from './Report';

const Profile = () => {
  const navigate = useNavigate();
  const [openProfileModal, setOpenProfileModal] = useState(false);
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

  const handleProfileClick = () => {
    setOpenProfileModal(true);
  };

  const onCloseProfileModal = () => {
    setOpenProfileModal(false);
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
        setValues({
          ...values,
          avater: data.avater,
          username: data.username,
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          phone: data.phone,
          balance: data.balance,
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

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
        console.log('Profile updated successfully');
        onCloseProfileModal();
        navigate('/profile');
      } else {
        console.error('Failed to update profile');
        // Handle error response here
      }
    } catch (error) {
      console.error('Error during profile update:', error);
      // Handle error here
    }
  };

  return (
    <>
      {/* Modal */}
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
                    alt="Profile Image"
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

              <div className="w-full mt-4">
                <Button type="submit">Update Now</Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      {/* Update card */}
      <div className="flex flex-col lg:flex-row sm:flex-col p-4">
        <Card className="max-w-sm lg:w-1/2 lg:h-1/2 w-full">
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
              <button
                onClick={handleProfileClick}
                className="bg-gray-700 hover:bg-opacity-70 text-white px-2 mb-2 rounded"
              >
                Edit Profile
              </button>
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
        <Report />
      </div>
    </>
  );
};
export default Profile;

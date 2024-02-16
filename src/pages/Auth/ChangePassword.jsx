import { useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    old_password: '',
    password: '',
    password2: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl =
      'https://e-library-z7s7.onrender.com/accounts/password/change/';
    const token = localStorage.getItem('access_token');

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/profile');
      } else {
        // Handle error response
        const errorData = await response.json();
        console.error('Password change failed:', errorData);
      }
    } catch (error) {
      console.error('Error during change password:', error);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-md mt-8">
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="p-4 sm:p-7">
            <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">
              Change Password
            </h4>
            <p className="mb-6 text-gray-500">
              Use this form to change your password. Once changed, Your new
              password will be in effect next time you login.
            </p>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="old_password" value="Current Password" />
                </div>
                <TextInput
                  id="old_password"
                  type="password"
                  name="old_password"
                  value={formData.old_password}
                  onChange={handleChange}
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="New Password" />
                </div>
                <TextInput
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password2" value="Re-enter New Password" />
                </div>
                <TextInput
                  id="password2"
                  type="password"
                  name="password2"
                  value={formData.password2}
                  onChange={handleChange}
                  required
                  shadow
                />
              </div>

              <Button type="submit">Change Password</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;

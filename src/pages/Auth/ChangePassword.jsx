import { useState } from 'react';
import { Button, Label, TextInput, Alert } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    old_password: '',
    new_password1: '',
    new_password2: '',
  });
  const [changeStatus, setChangeStatus] = useState(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.new_password1 || !formData.new_password2) {
      console.error('Please fill out all fields');
      return;
    }
    if (formData.new_password1 != formData.new_password2) {
      console.error("Password didn't match");
      return;
    }

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
        setChangeStatus('success');
        navigate('/');
      } else {
        // Handle error response
        const errorData = await response.json();
        console.error('Password change failed:', errorData);

        // Set login status to 'failure'
        setChangeStatus('failure');
      }
    } catch (error) {
      console.error('Error during change password:', error);

      // Set login status to 'failure'
      setChangeStatus('failure');
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
                  <Label htmlFor="password" value="Current Password" />
                </div>
                <TextInput
                  id="password"
                  type="password"
                  name="old_password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="New Password" />
                </div>
                <TextInput
                  id="password1"
                  type="password"
                  name="new_password1"
                  value={formData.new_password1}
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
                  name="new_password2"
                  value={formData.new_password2}
                  onChange={handleChange}
                  required
                  shadow
                />
              </div>

              <Button type="submit">Change Password</Button>
            </form>
            {changeStatus === 'success' && (
              <Alert color="success">
                <span className="text-green-700 font-medium">
                  Password Changed successful!
                </span>
              </Alert>
            )}
            {changeStatus === 'failure' && (
              <Alert color="error">
                <span className="text-red-700 font-medium">
                  Failed! Please try again.
                </span>
              </Alert>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;

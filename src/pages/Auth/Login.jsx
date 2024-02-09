import { useState } from 'react';
import { Button, Label, TextInput, Alert } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loginStatus, setLoginStatus] = useState(null); // State to track login status

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.email || !formData.password) {
      console.error('Please fill out all fields');
      return;
    }

    const apiUrl = 'https://e-library-z7s7.onrender.com/accounts/login/';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const { access, refresh } = await response.json();

        //save the token to localStorage
        localStorage.setItem('access_token', access);
        localStorage.setItem('refresh_token', refresh);

        // Set login status to 'success'
        setLoginStatus('success');

        navigate('/');
      } else {
        // Handle error response
        const errorData = await response.json();
        console.error('Login failed:', errorData);

        // Set login status to 'failure'
        setLoginStatus('failure');
      }
    } catch (error) {
      console.error('Error during login:', error);

      // Set login status to 'failure'
      setLoginStatus('failure');
    }
  };

  return (
    <div className="h-screen w-1/2 mx-auto my-12">
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@flowbite.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Password" />
          </div>
          <TextInput
            id="password2"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <Button type="submit">Login</Button>
      </form>
      {loginStatus === 'success' && (
        <Alert color="success">
          <span className="text-green-700 font-medium">Login successful!</span>
        </Alert>
      )}
      {loginStatus === 'failure' && (
        <Alert color="error">
          <span className="text-red-700 font-medium">
            Login failed! Please try again.
          </span>
        </Alert>
      )}
    </div>
  );
};

export default Login;

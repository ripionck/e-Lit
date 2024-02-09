'use client';

import { Button, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

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

        navigate('/');
      } else {
        // Handle error response
        const errorData = await response.json(); // Assuming server returns error details in JSON format
        console.error('Login failed:', errorData);
      }
    } catch (error) {
      console.error('Error during login:', error);
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
    </div>
  );
};

export default Login;

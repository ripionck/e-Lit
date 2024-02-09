'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password1: '',
    password2: '',
    email: '',
  });
  console.log(formData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.username ||
      !formData.email ||
      !formData.password1 ||
      !formData.password2
    ) {
      console.error('Please fill out all fields');
      return;
    }

    if (formData.password1 !== formData.password2) {
      console.error('Passwords do not match');
      return;
    }

    const apiUrl = 'https://e-library-z7s7.onrender.com/accounts/registration/';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Registration successful');
        // Redirect or perform any other action upon successful registration
      } else {
        // Handle error response
        const errorData = await response.json(); // Assuming server returns error details in JSON format
        console.error('Registration failed:', errorData);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="w-1/2 mx-auto my-12">
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Username" />
          </div>
          <TextInput
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Email" />
          </div>
          <TextInput
            type="email"
            id="email2"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@flowbite.com"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Password" />
          </div>
          <TextInput
            type="password"
            id="password1"
            name="password1"
            value={formData.password1}
            onChange={handleChange}
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Confirm password" />
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
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <a
              href="#"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              terms and conditions
            </a>
          </Label>
        </div>
        <Button type="submit">Register new account</Button>
      </form>
    </div>
  );
};
export default Register;

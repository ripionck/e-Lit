'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    password2: '',
    email: '',
  });
  const [error, setError] = useState('');

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
      !formData.password ||
      !formData.password2
    ) {
      setError('Please fill out all fields');
      return;
    }

    if (formData.password !== formData.password2) {
      setError('Passwords do not match');
      return;
    }

    const apiUrl = 'https://e-library-z7s7.onrender.com/accounts/register/';

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
      } else {
        // Handle error response
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="mx-auto max-w-md mt-8">
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="p-4 sm:p-7">
          <h3 className="text-xl font-black text-slate-700">Register</h3>
          <p className="mt-2 mb-5 text-base leading-tight text-gray-600">
            Create an account to get access E-Lit Emporium
          </p>
          <form
            className="flex max-w-md flex-col gap-4"
            onSubmit={handleSubmit}
          >
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
                placeholder="example@gmail.com"
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password" />
              </div>
              <TextInput
                type="password"
                id="password"
                name="password"
                value={formData.password}
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
          {error && <div className="text-red-500 my-2">{error}</div>}
          <p className="my-4">
            Already have an account?
            <a
              href="login"
              className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;

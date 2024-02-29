import { useState } from 'react';
import { Button, Label, TextInput, Alert } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Spinner';
import { Helmet } from 'react-helmet';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const { token } = await response.json();

        //save the token to localStorage
        localStorage.setItem('access_token', token.access);
        localStorage.setItem('refresh_token', token.refresh);

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>E-Lit Emporium | Login</title>
      </Helmet>
      {loading ? (
        <Loading />
      ) : (
        <div className="mx-auto max-w-md mt-8">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="p-4 sm:p-7">
              <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">
                Welcome to E-Lit Emporium!
              </h4>
              <p className="mb-6 text-gray-500">
                Please sign-in to access your account
              </p>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email2" value="Email" />
                  </div>
                  <TextInput
                    id="email2"
                    type="email"
                    placeholder="example@gmail.com"
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
                <div className="flex justify-between mb-2">
                  <div className="block">
                    <input
                      className="mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-indigo-500 focus:border-indigo-500 focus:shadow"
                      type="checkbox"
                      id="remember-me"
                    />
                    <label className="inline-block" htmlFor="remember-me">
                      Remember Me
                    </label>
                  </div>
                  <div className="block">
                    <p className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500">
                      <a href="forgot-password">Forgot Password?</a>
                    </p>
                  </div>
                </div>
                <Button type="submit">Login</Button>
              </form>
              {loginStatus === 'success' && (
                <Alert color="success">
                  <span className="text-green-700 font-medium">
                    Login successful!
                  </span>
                </Alert>
              )}
              {loginStatus === 'failure' && (
                <Alert color="error">
                  <span className="text-red-700 font-medium">
                    Login failed! Please try again.
                  </span>
                </Alert>
              )}
              <p className="my-4">
                New on E-Lit Emporium?
                <a
                  href="register"
                  className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
                >
                  Create an account
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;

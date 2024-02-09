import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(
    () => JSON.parse(localStorage.getItem('authTokens')) || null
  );
  const [user, setUser] = useState(() =>
    authTokens ? jwt_decode(authTokens.access) : null
  );
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://e-library-z7s7.onrender.com/accounts/token/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: e.target.username.value,
            password: e.target.password.value,
          }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        setAuthTokens(data);
        setUser(jwt_decode(data.access));
        localStorage.setItem('authTokens', JSON.stringify(data));
        history.push('/');
      } else {
        console.error('Login failed:', data);
        alert('Something went wrong!');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Something went wrong!');
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
    history.push('/login');
  };

  const refreshToken = async () => {
    try {
      const response = await fetch(
        'https://e-library-z7s7.onrender.com/accounts/token/refresh/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ refresh: authTokens?.refresh }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        setAuthTokens(data);
        setUser(jwt_decode(data.access));
        localStorage.setItem('authTokens', JSON.stringify(data));
      } else {
        console.error('Token refresh failed:', data);
        logoutUser();
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
      logoutUser();
    }
  };

  useEffect(() => {
    if (authTokens) {
      const { exp } = jwt_decode(authTokens.access);
      const currentTime = Math.floor(Date.now() / 1000);
      const timeUntilExpire = exp - currentTime;
      // Refresh token 5 minutes before it expires
      const refreshTimeout = setTimeout(
        refreshToken,
        (timeUntilExpire - 300) * 1000
      );
      return () => clearTimeout(refreshTimeout);
    }
  }, [authTokens]);

  useEffect(() => {
    setLoading(false);
  }, []);

  const contextData = {
    user,
    authTokens,
    setAuthTokens,
    setUser,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

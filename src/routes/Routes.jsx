import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Main from '../Layout/Main';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';
import Profile from '../pages/Profile/Profile';
import Dashboard from '../pages/Dashboard/Dashboard';
import BookList from '../pages/BookList/BookList';
import Services from '../pages/Services/Services';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import ForgotPassword from '../pages/Auth/ForgotPassword';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'book-list',
        element: <BookList />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

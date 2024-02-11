import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Main from '../Layout/Main';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';
import Profile from '../pages/Profile/Profile';
import Dashboard from '../pages/Dashboard/Dashboard';
import BookList from '../pages/BookList/BookList';
import About from '../pages/About/About';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import ChangePassword from '../pages/Auth/ChangePassword';
import Authors from '../pages/Dashboard/Authors/Authors';
import Publishers from '../pages/Dashboard/Publishers/Publishers';
import Users from '../pages/Dashboard/Users/Users';
import Books from '../pages/Dashboard/Books/Books';
import Categories from '../pages/Dashboard/Categories/Categories';
import AddBook from '../pages/Dashboard/Books/AddBook/AddBook';
import AddAuthor from '../pages/Dashboard/Authors/AddAuthor/AddAuthor';

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
        path: 'change-password',
        element: <ChangePassword />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          {
            path: 'authors',
            element: <Authors />,
          },
          {
            path: 'publishers',
            element: <Publishers />,
          },
          {
            path: 'users',
            element: <Users />,
          },
          {
            path: 'books',
            element: <Books />,
          },
          {
            path: 'categories',
            element: <Categories />,
          },
        ],
      },
      {
        path: 'book-list',
        element: <BookList />,
      },
      {
        path: 'add-book',
        element: <AddBook />,
      },
      {
        path: 'add-author',
        element: <AddAuthor />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';
import Profile from '../pages/Profile/Profile';
import Dashboard from '../pages/Dashboard/Dashboard';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import ChangePassword from '../pages/Auth/ChangePassword';
import Authors from '../pages/Dashboard/Authors/Authors';
import Publishers from '../pages/Dashboard/Publishers/Publishers';
import Users from '../pages/Dashboard/Users/Users';
import AllBooks from '../pages/Dashboard/AllBooks/AllBooks';
import Categories from '../pages/Dashboard/Categories/Categories';
import AddBook from '../pages/Dashboard/AllBooks/AddBook/AddBook';
import AddAuthor from '../pages/Dashboard/Authors/AddAuthor/AddAuthor';
import EditBook from '../pages/Dashboard/AllBooks/EditBook/EditBook';
import EditAuthor from '../pages/Dashboard/Authors/EditAuthor/EditAuthor';
import Transactions from '../pages/Dashboard/Transactions/Transactions';
import Deposit from '../pages/Deposit/Deposit';
import BookDetail from '../pages/BookDetail/BookDetail';
import AddPublisher from '../pages/Dashboard/Publishers/AddPublisher/AddPublisher';
import AddCategory from '../pages/Dashboard/Categories/AddCategory/AddCategory';
import NotFound from '../pages/NotFound/NotFound';
import EditPublisher from '../pages/Dashboard/Publishers/EditPublisher/EditPublisher';
import Books from '../pages/Books/Books';
import FilterBooks from '../pages/Books/FilterBooks/FilterBooks';
import SearchBooks from '../pages/Books/SearchBooks/SearchBooks';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
      { path: 'change-password', element: <ChangePassword /> },
      { path: 'profile', element: <Profile /> },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          { path: 'authors', element: <Authors /> },
          { path: 'publishers', element: <Publishers /> },
          { path: 'users', element: <Users /> },
          { path: 'all-books', element: <AllBooks /> },
          { path: 'categories', element: <Categories /> },
          { path: 'transactions', element: <Transactions /> },
        ],
      },
      { path: 'add-category', element: <AddCategory /> },
      { path: 'books', element: <Books /> },
      { path: 'book/:id', element: <BookDetail /> },
      { path: 'books/search/:query', element: <SearchBooks /> },
      { path: 'books/:filterType/:id', element: <FilterBooks /> },
      { path: 'add-book', element: <AddBook /> },
      { path: 'edit-book/:id', element: <EditBook /> },
      { path: 'add-author', element: <AddAuthor /> },
      { path: 'edit-author/:id', element: <EditAuthor /> },
      { path: 'add-publisher', element: <AddPublisher /> },
      { path: 'edit-publisher/:id', element: <EditPublisher /> },
      { path: 'deposit', element: <Deposit /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

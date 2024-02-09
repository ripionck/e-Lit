import { Outlet } from 'react-router-dom';
import CustomNavbar from '../pages/Common/Navbar';
import CustomFooter from '../pages/Common/Footer';

const Main = () => {
  return (
    <div className="px-8">
      <CustomNavbar />
      <Outlet />
      <CustomFooter />
    </div>
  );
};

export default Main;

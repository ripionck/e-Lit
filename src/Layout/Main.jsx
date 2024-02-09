import { Outlet } from 'react-router-dom';
import CustomNavbar from '../pages/Common/Navbar';
import Footer from '../pages/Common/Footer';

const Main = () => {
  return (
    <div className="px-8">
      <CustomNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

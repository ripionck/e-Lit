import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-8">
      <div className="mx-auto w-full max-w-screen-xl p-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src="/src/assets/E-Lit_Emporium.png"
                className="h-20 me-3"
                alt="FlowBite Logo"
              />
            </a>
          </div>
          <div className="flex justify-between flex-wrap w-full md:w-auto">
            <div className="mb-8 md:mb-0 md:mr-4">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Library
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Management
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0 md:mr-4">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                System
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0 md:mr-4">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                About Us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Our People
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Our Contributors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Management
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024
            <a href="/src/assets/logo.png" className="hover:underline ml-2">
              E-Lit Emporium™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex gap-4 text-2xl mt-4 sm:justify-center sm:mt-0">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
            <FaWhatsapp />
            <FaTelegram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

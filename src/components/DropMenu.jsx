import { useState } from 'react';

const DropdownMenu = ({ items, menuName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block py-2 pl-3 lg:pl-0 md:pl-0 lg:py-0 md:py-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        id="dropdownDelayButton"
        className="text-black focus:outline-none font-medium text-lg text-center inline-flex items-center"
        type="button"
      >
        {menuName}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* <!-- Dropdown menu --> */}
      {isOpen && (
        <div className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow lg:w-[600px] md:w-[400px] w-[400px] dark:bg-gray-700">
          <div className="py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-wrap">
            {items.map((item) => (
              <div key={item.id} className="flex">
                <button className="p-3 hover:text-blue-700">{item.name}</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

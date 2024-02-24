import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

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
        <HiChevronDown className="w-5 h-5 ml-2" />
      </button>

      {/* ---------- Dropdown menu ------------- */}
      {isOpen && (
        <div className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow lg:w-[600px] md:w-[400px] w-[400px] dark:bg-gray-700">
          <div className="py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-wrap">
            {items.map((item) => (
              <div key={item.id} className="flex">
                <button className="p-3 hover:text-blue-700">
                  {item.first_name && item.last_name
                    ? `${item.first_name} ${item.last_name}`
                    : null}
                  {item.name && !item.title ? item.name : null}
                  {item.title ? item.title : null}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

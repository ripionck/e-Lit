import { CiSearch } from 'react-icons/ci';

const categories = [
  'Category 1',
  'Category 2',
  'Category 3',
  'Category 4',
  'Category 5',
  'Category 6',
  'Category 7',
  'Category 8',
  'Category 9',
  'Category 10',
];

const BookList = () => {
  return (
    <div className="flex flex-row ml-4 mt-2">
      {/* ---------Left side--------------- */}
      <div className="flex flex-col w-1/5 p-4 overflow-y-auto">
        {/*-----------Categories---------------*/}
        <div className="border border-gray-300 px-4 py-2 rounded-sm">
          <h3 className="text-xl mb-2 border-b border-gray-300">
            Filter By Categories
          </h3>
          <div className="flex flex-col space-y-1 max-h-52 overflow-y-auto ">
            {categories.map((category, index) => (
              <label
                key={index}
                className="block border rounded px-2 py-0.5 hover:bg-gray-100 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="mr-2 cursor-pointer h-3 w-3"
                  style={{ boxShadow: 'none' }}
                />
                {category}
              </label>
            ))}
          </div>
        </div>
        {/*-------author---------- */}
        <div className="border border-gray-300 px-4 py-2 mt-4 rounded-sm">
          <div className="flex justify-between border-b border-gray-300 mb-2">
            <h4 className="">Filter</h4>
            <p className="">Reset Filter</p>
          </div>
          <p>Authors</p>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-2 py-1 pr-8 mt-3 mb-2 border rounded-full focus:outline-none focus:ring focus:border-blue-300"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <CiSearch />
            </span>
          </div>

          <div className="flex flex-col space-y-1 max-h-56 overflow-y-auto">
            {categories.map((category, index) => (
              <label
                key={index}
                className="block border rounded px-2 py-0.5 hover:bg-gray-100 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="mr-2 cursor-pointer h-3 w-3"
                  style={{ boxShadow: 'none' }}
                />
                {category}
              </label>
            ))}
          </div>
        </div>
        {/* -------------publishers-------------- */}
        <div className="border border-gray-300 px-4 py-2 mt-4 rounded-sm">
          <h4 className="">Publishers</h4>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-2 py-1 pr-8 mt-3 mb-2 border rounded-full focus:outline-none focus:ring focus:border-blue-300"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <CiSearch />
            </span>
          </div>
          <div className="flex flex-col space-y-1 max-h-52 overflow-y-auto">
            {categories.map((category, index) => (
              <label
                key={index}
                className="block border rounded px-2 py-0.5 hover:bg-gray-100 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="mr-2 cursor-pointer h-3 w-3"
                  style={{ boxShadow: 'none' }}
                />
                {category}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------Right Side -------------*/}
      <div className="flex flex-col w-4/5 p-4 overflow-y-auto">
        {/* Display All Items */}
        <div className="grid grid-cols-3 gap-4">
          {/* Sample Item */}
          <div className="bg-gray-200 p-4 rounded shadow">Sample Item 1</div>
          <div className="bg-gray-200 p-4 rounded shadow">Sample Item 2</div>
          <div className="bg-gray-200 p-4 rounded shadow">Sample Item 3</div>
          <div className="bg-gray-200 p-4 rounded shadow">Sample Item 3</div>
        </div>
      </div>
    </div>
  );
};

export default BookList;

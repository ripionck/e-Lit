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
      <div className="flex flex-col w-1/5 p-4 overflow-y-auto border border-black">
        {/* Categories */}
        <h3 className="text-xl mb-2 border-b border-black">
          Filter By Categories
        </h3>
        <div className="flex flex-col space-y-1 max-h-60 overflow-y-auto ">
          {categories.map((category, index) => (
            <div
              key={index}
              className="px-4 py-1 border rounded hover:bg-gray-100 cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>
        <div className="flex justify-between border-b border-t border-black bg-gray-300 mt-4">
          <h4 className="text-xl mb-2 ">Filter</h4>
          <p className="text-xl mb-2 ">Reset Filter</p>
        </div>
        <p>Authors</p>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-2 py-1 my-4 border rounded-full focus:outline-none focus:ring focus:border-blue-300"
        />
        <div className="flex flex-col space-y-1 max-h-60 overflow-y-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="px-4 py-1 border rounded hover:bg-gray-100 cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>
        <h4 className="border-t border-black mt-4">Publishers</h4>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-2 py-1 my-4 border rounded-full focus:outline-none focus:ring focus:border-blue-300"
        />
        <div className="flex flex-col space-y-1 max-h-60 overflow-y-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="px-4 py-1 border rounded hover:bg-gray-100 cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - All Items */}
      <div className="flex flex-col w-2/4 p-4 overflow-y-auto">
        {/* Display All Items */}
        <div className="grid grid-cols-3 gap-4">
          {/* Sample Item */}
          <div className="bg-gray-200 p-4 rounded shadow">Sample Item 1</div>
          <div className="bg-gray-200 p-4 rounded shadow">Sample Item 2</div>
          <div className="bg-gray-200 p-4 rounded shadow">Sample Item 3</div>
          {/* Add more items here */}
        </div>
      </div>
    </div>
  );
};

export default BookList;

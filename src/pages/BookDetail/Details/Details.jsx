import { useState } from 'react';

const Details = () => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-md font-medium text-center"
          id="default-styled-tab"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === 'description'
                  ? 'border-purple-600 text-purple-600 dark:text-purple-500'
                  : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              }`}
              id="description-styled-tab"
              onClick={() => handleTabClick('description')}
              type="button"
              role="tab"
              aria-controls="description"
              aria-selected={activeTab === 'description'}
            >
              Description
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === 'author'
                  ? 'border-purple-600 text-purple-600 dark:text-purple-500'
                  : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              }`}
              id="author-styled-tab"
              onClick={() => handleTabClick('author')}
              type="button"
              role="tab"
              aria-controls="author"
              aria-selected={activeTab === 'author'}
            >
              Author
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === 'more'
                  ? 'border-purple-600 text-purple-600 dark:text-purple-500'
                  : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              }`}
              id="more-styled-tab"
              onClick={() => handleTabClick('more')}
              type="button"
              role="tab"
              aria-controls="more"
              aria-selected={activeTab === 'more'}
            >
              More
            </button>
          </li>
        </ul>
      </div>
      <div id="default-styled-tab-content">
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === 'description' ? '' : 'hidden'
          }`}
          id="styled-description"
          role="tabpanel"
          aria-labelledby="description-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            excepturi, dignissimos at adipisci neque ex aliquam consequuntur cum
            praesentium soluta eligendi magnam eum quod delectus maxime fuga.
            Eius sapiente debitis perspiciatis molestiae dicta fugiat odio
            voluptates aspernatur doloremque laborum animi aperiam, dolorum
            dolore id! Aspernatur eligendi doloremque, vel harum ut neque
            nesciunt quia tempore, numquam molestias beatae quaerat, eos dolor
            facilis rem explicabo dolorem! Incidunt totam, similique voluptate
            veniam sunt debitis quia in reiciendis ducimus ea quam, tenetur
            architecto repellat voluptas libero nam animi ratione possimus. Nisi
            quaerat, atque voluptatibus reprehenderit ratione, distinctio nihil
            quos repellendus doloremque facere nulla consequatur!
          </p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === 'author' ? '' : 'hidden'
          }`}
          id="styled-author"
          role="tabpanel"
          aria-labelledby="author-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the
            <strong className="font-medium text-gray-800 dark:text-white">
              Author tab&apos;s associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === 'more' ? '' : 'hidden'
          }`}
          id="styled-more"
          role="tabpanel"
          aria-labelledby="more-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the
            <strong className="font-medium text-gray-800 dark:text-white">
              More tab&apos;s associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </>
  );
};

export default Details;

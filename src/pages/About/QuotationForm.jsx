const QuotationForm = () => {
  return (
    <>
      <section className=" py-12 text-gray-800 sm:py-24">
        <div className="mx-auto flex max-w-md flex-col rounded-lg lg:max-w-screen-xl lg:flex-row">
          <div className="max-w-2xl px-4 lg:pr-24">
            <p className="mb-2 text-blue-600">Have Custom Needs</p>
            <h3 className="mb-5 text-3xl font-semibold">Get Custom Pricing</h3>
            <p className="mb-16 text-lg text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur, corrupti asperiores voluptatum labore eligendi
              quisquam. Id quae, laboriosam saepe facere ea asperiores!
            </p>
            <div className="mb-5 flex font-medium">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-7 w-7 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                  />
                </svg>
              </div>
              <div className="">
                <p className="mb-2">Monthly 400k Image Downloads</p>
                <span className="font-normal text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum porro molestias quaerat maxime modi.
                </span>
              </div>
            </div>
            <div className="mb-5 flex font-medium">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-7 w-7 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
              <div className="">
                <p className="mb-2">Stay Syned to the Database</p>
                <span className="font-normal text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum porro molestias quaerat maxime modi.
                </span>
              </div>
            </div>
            <div className="mb-5 flex font-medium">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-7 w-7 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <div className="">
                <p className="mb-2">Save on Energy Costs</p>
                <span className="font-normal text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum porro molestias quaerat maxime modi.
                </span>
              </div>
            </div>
          </div>
          <div className="border border-gray-100 shadow-gray-500/20 mt-8 mb-8 max-w-md bg-white shadow-sm sm:rounded-lg sm:shadow-lg lg:mt-0">
            <div className="relative border-b border-gray-300 p-4 py-8 sm:px-8">
              <h3 className="mb-1 inline-block text-3xl font-medium">
                <span className="mr-4">Get a quote!</span>
                <span className="inline-block rounded-md bg-blue-100 px-2 py-1 text-sm text-blue-700 sm:inline">
                  Quick Response
                </span>
              </h3>
              <p className="text-gray-600">Contact us for custom use cases</p>
            </div>
            <div className="p-4 sm:p-8">
              <input
                id="name"
                type="text"
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter your name"
              />
              <input
                id="email"
                type="email"
                className="peer mt-8 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter your email"
              />
              <div className="peer-invalid:block mt-1 hidden text-left text-xs text-rose-600">
                Email format Incorrect. Please complete the email
              </div>
              <label className="mt-5 mb-2 inline-block max-w-full">
                Tell us about your company
              </label>
              <textarea
                id="about"
                className="mb-8 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
              ></textarea>
              <button className="w-full rounded-lg border border-blue-700 bg-blue-700 p-3 text-center font-medium text-white outline-none transition focus:ring hover:border-blue-700 hover:bg-blue-600 hover:text-white">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuotationForm;

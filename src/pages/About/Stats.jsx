const Stats = () => {
  return (
    <>
      <section className="leading-6 text-blue-900 pb-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold leading-9 sm:text-4xl sm:leading-tight">
              Impressive Results in 2 Years
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 divide-blue-200 sm:grid-cols-2 md:gap-8 lg:mt-16 lg:grid-cols-4 lg:divide-x">
            <div className="border-b border-blue-200 py-10 px-6 lg:border-b-0">
              <div className="flex items-center">
                <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                  <span className="absolute -top-4 h-2 w-full bg-blue-200"></span>
                  328
                </h3>
                <span className="ml-3 text-base font-medium capitalize">
                  Great Achievements
                </span>
              </div>
            </div>

            <div className="border-b border-blue-200 py-10 px-6 lg:border-b-0">
              <div className="flex items-center">
                <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                  <span className="absolute -top-4 h-2 w-full bg-blue-200"></span>
                  16
                </h3>
                <span className="ml-3 text-base font-medium capitalize">
                  Graduations sponsored
                </span>
              </div>
            </div>

            <div className="border-b border-blue-200 py-10 px-6 lg:border-b-0">
              <div className="flex items-center">
                <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                  <span className="absolute -top-4 h-2 w-full bg-blue-200"></span>
                  41+
                </h3>
                <span className="ml-3 text-base font-medium capitalize">
                  jobs created
                </span>
              </div>
            </div>

            <div className="border-b border-blue-200 py-10 px-6 lg:border-b-0">
              <div className="flex items-center">
                <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                  <span className="absolute -top-4 h-2 w-full bg-blue-200"></span>
                  99%
                </h3>
                <span className="ml-3 text-base font-medium capitalize">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;

const Content = () => {
  return (
    <>
      <div className="mx-auto my-10 max-w-lg px-4 text-gray-600 md:max-w-screen-lg">
        <div className="mb-10 flex flex-col border-t-4 border-blue-600 pt-4 md:flex-row">
          <h2 className="mr-auto mb-4 text-4xl font-medium lg:text-3xl">
            Experience of{' '}
            <span className="whitespace-nowrap text-blue-600 md:text-gray-600">
              2 Decades
            </span>
          </h2>
          <a
            href="#"
            className="text-lg font-medium underline hover:text-blue-600"
          >
            Read our Story
          </a>
        </div>
        <div className="flex flex-col md:flex-row">
          <div>
            <p className="mb-4 md:pr-10 md:text-xl md:leading-relaxed lg:pr-28">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              omnis sint debitis sequi animi quaerat repellendus id distinctio
              dolores minus.
            </p>
            <p className="md:pr-10 md:text-xl md:leading-relaxed lg:pr-28">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              eos quod hic perspiciatis, consectetur suscipit maxime mollitia
              minima. Enim consequatur ab praesentium ipsum neque dolore
              expedita, earum rerum reiciendis nihil, deleniti id atque
              consequuntur necessitatibus distinctio aliquid explicabo quo
              obcaecati?
            </p>
          </div>
          <p className="hidden uppercase md:block md:text-7xl">
            Since <br />
            <span className="whitespace-nowrap text-blue-600">20 Years</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;

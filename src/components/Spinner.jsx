import { Spinner } from 'flowbite-react';

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  );
};
export default Loading;

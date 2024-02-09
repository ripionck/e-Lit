'use client';

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

const Profile = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="#"
                className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a
                href="#"
                className="text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Profile;

// 'use client';

// import { Card } from 'flowbite-react';

// const Profile = () => {
//   return (
//     <div className="h-screen w-1/2 mx-auto mt-12">
//       <Card className="max-w-sm">
//         <div className="flex justify-end px-4 pt-4"></div>
//         <div className="flex flex-col items-center pb-10">
//           <img
//             alt="Bonnie image"
//             height="96"
//             src="/images/people/profile-picture-3.jpg"
//             width="96"
//             className="mb-3 rounded-full shadow-lg"
//           />
//           <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
//             Username: username
//           </h5>
//           <span className="text-sm text-gray-500 dark:text-gray-400">
//             Full Name: Full Name
//           </span>
//           <span className="text-sm text-gray-500 dark:text-gray-400">
//             Email: email@gmail.com
//           </span>
//           <span className="text-sm text-gray-500 dark:text-gray-400">
//             Balance: 500$
//           </span>
//           <div className="mt-4 flex space-x-3 lg:mt-6">
//             <a
//               href="#"
//               className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
//             >
//               Add friend
//             </a>
//             <a
//               href="#"
//               className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
//             >
//               Message
//             </a>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// };
// export default Profile;

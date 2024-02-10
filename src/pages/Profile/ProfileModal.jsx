import { Modal, Label, TextInput, FileInput, Button } from 'flowbite-react';
import PropTypes from 'prop-types';
const ProfileModal = ({
  open,
  onClose,
  user,
  handleChange,
  handleUpdate,
  formData,
  successMessage,
  errorMessage,
}) => {
  return (
    <Modal show={open} size="xl" onClose={onClose} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Your Profile
          </h3>
          <form onSubmit={handleUpdate}>
            <form onSubmit={handleUpdate}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="username" value="Username" />
                </div>
                <TextInput
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={user?.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex gap-4">
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="firstName" value="First Name" />
                  </div>
                  <TextInput
                    id="firstName"
                    name="first_name"
                    placeholder="First name"
                    value={user?.first_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="lastName" value="Last Name" />
                  </div>
                  <TextInput
                    id="lastName"
                    name="last_name"
                    placeholder="Last name"
                    value={user?.last_name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email Address" />
                </div>
                <TextInput
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={user?.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex gap-4">
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="phone" value="Phone Number" />
                  </div>
                  <TextInput
                    id="phone"
                    name="phone"
                    value={user?.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="balance" value="Account Balance" />
                  </div>
                  <TextInput
                    id="balance"
                    name="balance"
                    value={user?.balance}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <div className="block mb-2">
                  <Label htmlFor="multiple-file-upload" value="Profile Image" />
                </div>
                <FileInput
                  id="multiple-file-upload"
                  name="avater"
                  type="file"
                  onChange={handleChange}
                  multiple
                />
              </div>

              <div className="w-full mt-4">
                <Button>Update Now</Button>
              </div>
            </form>
          </form>

          {successMessage && (
            <span className="text-green-700 font-medium">
              Profile update successful!
            </span>
          )}
          <div className="w-full">
            <a
              href="change-password"
              className="hover:underline cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
            >
              Change password?
            </a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

ProfileModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default ProfileModal;
